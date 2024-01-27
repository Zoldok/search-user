import { Link } from 'react-router-dom'
import * as S from './CardUser.styled'
import { useSelector } from 'react-redux';

export const CardUser = () => {
  const users = useSelector((state) => state.users.users);
  if (!users || !users.items) return <div>Совпадений не найдено</div>;
console.log('данные',users);
//добавить модальное окно

  return (
    <>

      {users.items.map((user, index) => (
        <Link to={`/user/${user.id}`} key={index}>
          <S.CardsItem>
            <S.CardsCard>
              <S.CardsImage>
                <S.CardsImageImg src={user.avatar_url} alt="picture" />
              </S.CardsImage>
              <S.CardContent>
                {/* <S.CardTitle>{item.url}</S.CardTitle> */}
                <S.CardPrice>ID: {user.id}</S.CardPrice>
                <S.CardPlace>LOGIN:{user.login}</S.CardPlace>
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        </Link>
      ))}
    </>
  )
}
