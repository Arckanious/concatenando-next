import styled from 'styled-components'

export const FormerCointainer = styled.form`
  width: 100%;
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid rgba(15, 14, 14, 0.2);
  background-color: white;
  border-radius: 0.4rem;
  height: 16rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.black};
  padding: 1.4rem;
  resize: none;
  outline: none;
  margin-bottom: 2rem;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`
