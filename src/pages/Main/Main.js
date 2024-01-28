import React, { useEffect, useState } from 'react'
import {
  useGetUsersAscQuery,
  useGetUsersDescQuery,
} from '../../store/service/Service'
import { CardUser } from '../CardUser/CardUser'
import * as S from './Main.styled'
import { useDispatch } from 'react-redux'
import { findUser, updateUserNameInput } from '../../store/slise/userSlice'
import { useSelector } from 'react-redux'

//TODO:
//стилизовать пагинацию
//поставить свой значок вместо реакта

export const Main = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const userNameInput = useSelector((state) => state.users.userNameInput)
  const [userName, setUserName] = useState(userNameInput || '')
  const [pages, setPages] = useState(1)
  const [trigger, setTrigger] = useState(false)
  const setData = { userName, pages }
  const [isAscending, setIsAscending] = useState(true)
  const [activeButton, setActiveButton] = useState('ascending')
  const [message, setMessage] = useState(null)
  // const [activeButtonIndex, setActiveButtonIndex] = useState(1);

  const showMessage = (text, duration = 3000) => {
    setMessage(text)
    setTimeout(() => {
      setMessage(null)
    }, duration)
  }

  useEffect(() => {
    dispatch(updateUserNameInput(userNameInput))
  }, [dispatch, userNameInput])

  const { data, isLoading, error } = isAscending
    ? useGetUsersAscQuery(setData, {
        skip: !trigger,
        onSuccess: () => {
          setTrigger(false)
        },
      })
    : useGetUsersDescQuery(setData, {
        skip: !trigger,
        onSuccess: () => {
          setTrigger(false)
        },
      })

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(findUser(data))
    }
  }, [data, isLoading])

  useEffect(() => {
    if (error) {
      if (error.status === 403) {
        showMessage('Обишка обработки запроса, попробуйте позже')
      } else {
        showMessage('Произошла ошибка. Попробуйте еще раз.')
      }
    }
  }, [error])

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserName(userNameInput)
    dispatch(updateUserNameInput(userNameInput))
    setTrigger(true)
  }

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(findUser(data))
    }
  }, [data, isLoading])

  const handleInputChange = (event) => {
    dispatch(updateUserNameInput(event.target.value))
  }

  const renderButtons = () => {
    const buttonCount = Math.min(~~(data?.total_count / 30), 34)
    const buttons = []

    const visibleButtons = 5
    const ellipsisStart = (
      <S.ButtonNumber key="ellipsis-start">...</S.ButtonNumber>
    )
    const ellipsisEnd = <S.ButtonNumber key="ellipsis-end">...</S.ButtonNumber>

    if (buttonCount <= visibleButtons) {
      for (let i = 1; i <= buttonCount; i++) {
        buttons.push(
          <S.ButtonNumber
            key={i}
            onClick={() => setPages(i)}
            className={pages === i ? 'active' : ''}
          >
            {i}
          </S.ButtonNumber>,
        )
      }
    } else {
      const firstButton = (
        <S.ButtonNumber
          key={1}
          onClick={() => setPages(1)}
          className={pages === 1 ? 'active' : ''}
        >
          1
        </S.ButtonNumber>
      )
      const lastButton = (
        <S.ButtonNumber
          key={buttonCount}
          onClick={() => setPages(buttonCount)}
          className={pages === buttonCount ? 'active' : ''}
        >
          {buttonCount}
        </S.ButtonNumber>
      )

      buttons.push(firstButton)

      const sideButtons = Math.floor((visibleButtons - 3) / 2)
      let start = pages - sideButtons
      let end = pages + sideButtons

      if (start <= 1) {
        start = 2
        end = start + sideButtons * 2
      } else if (end >= buttonCount) {
        end = buttonCount - 1
        start = end - sideButtons * 2
      }

      if (start > 2) {
        buttons.push(ellipsisStart)
      }

      for (let i = start; i <= end; i++) {
        buttons.push(
          <S.ButtonNumber
            key={i}
            onClick={() => setPages(i)}
            className={pages === i ? 'active' : ''}
          >
            {i}
          </S.ButtonNumber>,
        )
      }

      if (end < buttonCount - 1) {
        buttons.push(ellipsisEnd)
      }

      buttons.push(lastButton)
    }

    return buttons
  }

  const handleAscButtonClick = (e) => {
    e.preventDefault()
    setIsAscending(true)
    setActiveButton('ascending')
    setTrigger(true)
  }

  const handleDescButtonClick = (e) => {
    e.preventDefault()
    setIsAscending(false)
    setActiveButton('descending')
    setTrigger(true)
  }

  return (
    <S.Wrapper>
      <S.Form id="wrapper">
        <S.Input
          type="search"
          value={userNameInput}
          onChange={handleInputChange}
          placeholder="Введите логин пользователя"
        />
        <S.Button onClick={handleSubmit}>Найти</S.Button>
        <br />
      </S.Form>

      <S.ButtonBlock>
        <S.ButtonAscDesc
          onClick={handleAscButtonClick}
          className={activeButton === 'ascending' ? 'active' : ''}
          data-isactive={activeButton === 'ascending'}
        >
          по возрастанию
        </S.ButtonAscDesc>

        <S.ButtonAscDesc
          onClick={handleDescButtonClick}
          className={activeButton === 'descending' ? 'active' : ''}
          data-isactive={activeButton === 'descending'}
        >
          по убыванию
        </S.ButtonAscDesc>
      </S.ButtonBlock>

      <br />
      <S.PaginButton> {renderButtons()}</S.PaginButton>
      {message && <S.Message>{message}</S.Message>}
      <S.ContentCards>
        <CardUser users={users} />
      </S.ContentCards>
      <S.PaginButton> {renderButtons()}</S.PaginButton>
    </S.Wrapper>
  )
}
