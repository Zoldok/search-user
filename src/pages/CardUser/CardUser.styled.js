import styled from 'styled-components'

const maxMobileWidthTwo = '620px'

export const CardsItem = styled.div`
  margin: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`
export const CardsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 157px;
    height: 320px;
    display: flex;
    flex-direction: column;
  }
`
export const CardsImage = styled.div`
  // width: 270px;
  // height: 270px;
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 157px;
    height: 152px;
    background-color: #d9d9d9;
  }
`
export const CardsImageImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
  margin-top: 10px;
`

export const CardName = styled.p`
  // color: #000000;
  // font-size: 15px;
  // font-weight: 500;
  // line-height: 33px;
  // margin-bottom: 10px;
  // @media screen and (max-width: ${maxMobileWidthTwo}) {
  //   line-height: 24px;
  // }
  overflow-wrap: break-word;
`
