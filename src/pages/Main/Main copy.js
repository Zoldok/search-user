import React, { useEffect, useState } from 'react'
// import { useGetUsersQuery } from '../../store/service/Service';
import {
  useGetUsersAscQuery,
  useGetUsersDescQuery,
} from '../../store/service/Service'
import { CardUser } from '../CardUser/CardUser'
import * as S from './Main.styled'
import { useDispatch } from 'react-redux'
import { findUser } from '../../store/slise/userSlice'

//TODO:
//диспатчить данные в состояние
//вытащить из состояния и замапить на странице
//не более 1000 user т.е 34 стр максимум
//переходы на страницу пользователя

export const Main = () => {
  const dispatch = useDispatch()
  const [userNameInput, setUserNameInput] = useState('')
  const [userName, setUserName] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(1)
  const [trigger, setTrigger] = useState(false)
  const setData = { userName, pages }
  // const [totalCount, setTotalCount] = useState(0)
  const [isAscending, setIsAscending] = useState(true) //изменение сервера запроса

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
    setUserName(userNameInput)
    setTrigger(true)
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(findUser(data))
    }
  }, [data, isLoading])

  const handleInputChange = (event) => {
    setUserNameInput(event.target.value)
  }

  const renderButtons = () => {
    const buttonCount = Math.min(~~(data?.total_count / 30), 34)
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
  console.log('ВСЕ ДАННЫЕ', data)
  console.log('Количество элементов', data?.total_count)
  //   при получении данных записать их в состояние и установить флаг trigger в false
  const items = data?.items

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
        <CardUser items={items} />
      </S.ContentCards>

      {renderButtons()}
    </div>
  )
}