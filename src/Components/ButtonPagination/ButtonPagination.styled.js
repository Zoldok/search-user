import { styled } from 'styled-components'

export const ButtonNumber = styled.button`
  background-color: #77edfc;
  height: 35px;
  width: 35px;
  border-radius: 4px;
  font-size: 20px;
  &.active {
    background-color: #7f00ff;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`