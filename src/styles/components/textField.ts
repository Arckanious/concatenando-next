import styled from 'styled-components'

export const Container = styled.div`
  height: 5.6rem;
  position: relative;
  margin-bottom: 1.2rem;
`

export const TextFieldPlaceHolder = styled.p`
  transition: 350ms;
  position: absolute;
  padding-left: 1.4rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.gray};
  top: 2rem;
`

export const TextFieldInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 1.4rem;
  outline: none;
  font-size: 1.4rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  border-bottom: 2px solid rgba(15, 14, 14, 0.2);
  background-color: white;

  &:focus ~ ${TextFieldPlaceHolder} {
    top: 0;
    color: ${props => props.theme.colors.primary};
  }

  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`
