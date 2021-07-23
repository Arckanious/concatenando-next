import styled from 'styled-components'

export const FormerCointainer = styled.form`
  width: 100%;
`

export const ButtonConainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const TextFieldContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const TextArea = styled.textarea`
  background-color: white;
  border: 2px solid rgba(15, 14, 14, 0.2);
  border-radius: 0.4rem;
  color: ${props => props.theme.colors.black};
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  height: 16rem;
  margin-bottom: 1.2rem;
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
