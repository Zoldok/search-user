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
import { renderButtons } from '../../Components/ButtonPagination/ButtonPagination'

//TODO:
//ReadMe
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
      <S.PaginButton> {renderButtons(data, pages, setPages)}</S.PaginButton>
      {message && <S.Message>{message}</S.Message>}
      <S.ContentCards>
        <CardUser users={users} />
      </S.ContentCards>
      <S.PaginButton> {renderButtons(data, pages, setPages)}</S.PaginButton>
    </S.Wrapper>
  )
}
