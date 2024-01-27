import React, { useEffect,  useState } from 'react'
// import { useGetUsersQuery } from '../../store/service/Service';
import {
  useGetUsersAscQuery,
  useGetUsersDescQuery,
} from '../../store/service/Service'
import { CardUser } from '../CardUser/CardUser'
import * as S from './Main.styled'
import { useDispatch } from 'react-redux'
import { findUser, updateUserNameInput } from '../../store/slise/userSlice'
import { useSelector } from 'react-redux';


export const Main = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users);
  const userNameInput = useSelector(state => state.users.userNameInput)
  // const [userNameInput, setUserNameInput] = useState('')
  const [userName, setUserName] = useState(userNameInput || '')
  const [pages, setPages] = useState(1)
  const [trigger, setTrigger] = useState(false)
  const setData = { userName, pages }
  const [isAscending, setIsAscending] = useState(true) //изменение сервера запроса

  useEffect(() => {
    dispatch(updateUserNameInput(userNameInput))
  }, [dispatch, userNameInput])

  const { data, isLoading } = isAscending
    ? useGetUsersAscQuery(setData, {
        skip: !trigger,
        onSuccess: () => {
          // setTotalCount(result)
          setTrigger(false)
        },
      })
    : useGetUsersDescQuery(setData, {
        skip: !trigger,
        onSuccess: () => {
          // setTotalCount(result)
          setTrigger(false)
        },
      })

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserName(userNameInput);
    //задиспатчить даныне ввода
     dispatch(updateUserNameInput(userNameInput));
    setTrigger(true)
  }

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(findUser(data))
    }
  }, [data, isLoading])

  const handleInputChange = (event) => {
    // setUserNameInput(event.target.value);
    dispatch(updateUserNameInput(event.target.value))
  }

  const renderButtons = () => {
    const buttonCount = Math.min(~~(users?.total_count / 30), 34)
    const buttons = []

    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <button key={i} onClick={() => setPages(i)}>
          {i}
        </button>,
      )
    }

    return buttons
  }

  const handleAscButtonClick = (e) => {
    e.preventDefault()
    setIsAscending(true)
    setTrigger(true)
  }

  const handleDescButtonClick = (e) => {
    e.preventDefault()
    setIsAscending(false)
    setTrigger(true)
  }

  // console.log('данные ответа сервера', totalCount)
  console.log('ВСЕ ДАННЫЕ', users)
  console.log('Количество элементов', users?.total_count)
  //   при получении данных записать их в состояние и установить флаг trigger в false
  // const items = data?.items

  // if (!items) return <>Load</>
  return (
    <div className="App">
      {renderButtons()}
      <form>
        <input
          type="search"
          value={userNameInput}
          onChange={handleInputChange}
          placeholder="Введите имя пользователя"
        />
        <button onClick={handleSubmit}>Отправить</button>
        <br />
      </form>
        <button onClick={handleAscButtonClick}>по возрастанию</button>
        <button onClick={handleDescButtonClick}>по убыванию</button>
      {data && <p>Всего {data?.total_count} пользователей</p>}
      <S.ContentCards>
        <CardUser users={users} />
      </S.ContentCards>

      {renderButtons()}
    </div>
  )
}
