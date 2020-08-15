import styled from 'styled-components'

const Button = styled.button`
  border: none;
  padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[3]};
  background-color: ${({ theme }) => theme.buttonColor.main};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.fontColor.secondary};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export default Button
