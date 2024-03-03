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
  background-color: rgba(11, 99, 246, 1);
  border-radius: 6px;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-style: normal;
  margin-left: 20px;
  box-shadow: 0 5px 15px 0 rgba(11, 99, 246, 1);
  transition: 0.5s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(11, 99, 246, 1);
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
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #0d24c9;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: black;
  transition: 0.2s ease-in-out;

  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }

  -webkit-animation: bounce-in-top 1.1s both;
  animation: bounce-in-top 1.1s both;
  animation-iteration-count: 1;
  &:before {
    content: '';
    background: linear-gradient(
      90deg,
      rgb(255 255 255 / 0%),
      rgb(245 245 245 / 44%)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }

  &:hover {
    background: rgb(101 101 101);
    color: #fff;
  }

  &:hover:before {
    left: 150px;
    transition: 0.5s ease-in-out;
  }
  &.active {
    background-color: rgb(65 65 65);
    color: white;
  }
`

export const ButtonAsc = styled(ButtonAscDesc)`
animation-delay: 0.3s;
`

export const ButtonDesc = styled(ButtonAscDesc)`
animation-delay: 0.6s;
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
