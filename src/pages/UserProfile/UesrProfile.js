// import { Link } from 'react-router-dom'
// import * as S from './CardUser.styled'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
    const data = useSelector((state) => state.users.users);
    if(!data) return <>Load</>
//   if (!items) return <div>Совпадений не наидено</div>
  const { adId } = useParams()
//   console.log('со страницы профайл',items);
  console.log('данные при переходе на страницу', data);

  return (
    <>
    <>{adId}</>

    </>
  )
}
