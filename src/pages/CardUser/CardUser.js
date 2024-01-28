import { useState } from 'react'
import * as S from './CardUser.styled'
import { useSelector } from 'react-redux'
import { Modal } from '../../Components/Modal/Modal'

export const CardUser = () => {
  const users = useSelector((state) => state.users.users)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!users || !users.items) return <div></div>

  const openModal = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedUser(null)
    setIsModalOpen(false)
  }

  return (
    <>
      {users.items.map((user, index) => (
        <S.CardsItem key={index}>
          <S.CardsCard onClick={() => openModal(user)}>
            <S.CardsImage>
              <S.CardsImageImg src={user.avatar_url} alt="picture" />
            </S.CardsImage>
            <S.CardContent>
              <S.CardName>{user.login}</S.CardName>
            </S.CardContent>
          </S.CardsCard>
        </S.CardsItem>
      ))}
      {isModalOpen && selectedUser && (
        <Modal user={selectedUser} onClose={closeModal} />
      )}
    </>
  )
}
