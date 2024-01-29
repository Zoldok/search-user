import styled from 'styled-components'

const maxMobileWidthTwo = '620px'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media screen and (max-width: ${maxMobileWidthTwo}) {
margin-top: 20px;
  }
`

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
`
export const ButtonAscDesc = styled.button`
  width: 180px;
  height: 30px;
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
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-top: 10px;
    flex-direction: column;
    gap: 20px;
      }
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
  color: #7f00ff;
  font-size: 18px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
`

export const ContentCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vh;
  width: 100%;
  grid-gap: 40px 26px;
  justify-content: center;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

`
