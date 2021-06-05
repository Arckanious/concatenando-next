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

export const FormButtom = styled.button`
  width: 100%;
  align-items: center;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  user-select: none;
  transition: 250ms;
  outline: none;
  height: 5.6rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors.primary};
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0px 2.8rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }
`
