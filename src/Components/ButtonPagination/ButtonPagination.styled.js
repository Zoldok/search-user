import { styled } from 'styled-components'

export const ButtonNumber = styled.button`
  background-color: #787979;;
  height: 35px;
  width: 35px;
  color: white;
  border-radius: 3px;
  font-size: 20px;
  &.active {
    background-color: rgb(65 65 65);;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`

export const DivN = styled.div`
    font-size: 30px;
    display: flex;
    align-items: flex-end;
`