import styled from 'styled-components'

export interface TextFieldPlaceHolderProps {
  isEmpty: boolean
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const TextFieldPlaceHolder = styled.p<TextFieldPlaceHolderProps>`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => (props.isEmpty ? '1.4rem' : '1.2rem')};
  padding-left: 1.4rem;
  position: absolute;
  top: ${props => (props.isEmpty ? '2rem' : '0')};
  transition: 350ms;
`

export const TextFieldInput = styled.input`
  background-color: white;
  border-bottom: 2px solid rgba(15, 14, 14, 0.2);
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  font-size: 1.4rem;
  height: 100%;
  height: 5.6rem;
  outline: none;
  padding-left: 1.4rem;
  width: 100%;

  &:focus ~ ${TextFieldPlaceHolder} {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    top: 0;
  }

  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`

export const ErrorContainer = styled.div`
  color: red;
  font-size: 1.2rem;
  height: 1.4rem;
`
