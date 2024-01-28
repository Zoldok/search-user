import { useGetUserDataQuery } from '../../store/service/Service'
import * as S from './ModalStyle'

export const Modal = ({ onClose, user }) => {
  console.log('data is modal', user)
  const userName = user.login
  const { data } = useGetUserDataQuery(userName)
  console.log('djn jyb', data)

  const herf = data?.html_url

  if (!data) return <>Load</>
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.NameDiv>
          <h2>Пользователь {user?.login}</h2>
        </S.NameDiv>
        <S.ModalBtnClose onClick={onClose}>
          <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
        </S.ModalBtnClose>
        <a href={herf} target="_blank" rel="noreferrer">
          <S.UserAvatar src={user?.avatar_url} />
        </a>
        <S.DataUser>
          <p>Имя: {data?.name ? data.name : 'не указано'}</p>
          <p>подписчиков: {data?.followers}</p>
          <p>подписок: {data?.following}</p>
          <S.Sity>
            Место нахождения: {data?.location ? data.location : 'не указано'}
          </S.Sity>
        </S.DataUser>

        <S.Button onClick={onClose}>
          <S.Herf href={herf} target="_blank" rel="noopener noreferrer">
            GitHub
          </S.Herf>
        </S.Button>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}
