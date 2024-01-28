import styled from 'styled-components'

const maxMobileWidthTwo = '620px'
const maxMobileWidth = '890px'
const maxMobileWidthThree = '1158px'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #7f00ff;
  border-radius: 6px;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-style: normal;
  margin-left: 20px;
  animation: vibrate-1 0.5s linear infinite both;
  @keyframes vibrate-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-1px, 1px);
    }
    40% {
      transform: translate(-1px, -1px);
    }
    60% {
      transform: translate(1px, 1px);
    }
    80% {
      transform: translate(1px, -1px);
    }
    100% {
      transform: translate(0);
    }
  }
`

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
`
export const ButtonAscDesc = styled.button`
  width: 180px;
  height: 30px;
  // background-color: ${(props) => (props.isActive ? '#ae05fc' : '#7f00ff')};
  background-color: #7f00ff;
  border-radius: 6px;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-style: normal;
  &.active {
    background-color: #ae05fc;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`

export const ButtonBlock = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 40px;
`
export const PaginButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  gap: 5px;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`

export const Message = styled.div`
  display: flex;
  color: red;
  // height: 50px;
  // margin-top: 5px;
  color: #7f00ff;
  // font-family: Roboto;
  font-size: 18px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
`
export const ButtonNumber = styled.button`
  background-color: #77edfc;
  height: 35px;
  width: 35px;
  border-radius: 4px;
  &.active {
    background-color: #7f00ff;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`
export const ContentCards = styled.div`
  max-width: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  // grid-auto-rows: 320px;
  grid-gap: 40px 26px;
  justify-content: center;
  // overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  padding-bottom: 40px;
  // max-height: 100vh;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: ${maxMobileWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 100px);
  }

  @media screen and (max-width: ${maxMobileWidthThree}) {
    display: grid;
    grid-template-columns: repeat(3, 150px);
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: grid;
    grid-template-columns: repeat(2, 157px);
    grid-auto-rows: 190px;
    grid-gap: 10px 10px;
    justify-content: center;
    // height: 596px;
  }
`
