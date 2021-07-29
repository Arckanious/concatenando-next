import styled from 'styled-components'

export const TextAreaContainer = styled.textarea`
  background-color: white;
  border: 2px solid rgba(15, 14, 14, 0.2);
  border-radius: 0.4rem;
  color: ${props => props.theme.colors.black};
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  height: 16rem;
  outline: none;
  padding: 1.4rem;
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`
export const ErrorContainer = styled.div`
  color: red;
  font-size: 1.2rem;
  height: 1.4rem;
`
