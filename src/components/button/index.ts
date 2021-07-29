import styled from 'styled-components'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'white' | undefined
  rounded?: boolean
  full?: boolean
}

export default styled.button<ButtonProps>`
  align-items: center;
  background-color: ${props =>
    props.theme.colors[props.color ? props.color : 'primary']};

  border-radius: ${props => (props.rounded ? '2.8rem' : '0.4rem')};
  box-shadow: ${props => props.theme.shadows.shadowSm};
  color: ${props =>
    props.color === 'white'
      ? props.theme.colors.black
      : props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  font-weight: bold;
  height: 5.6rem;
  justify-content: center;
  outline: none;
  padding: 0px 2.4rem;
  text-transform: uppercase;
  transition: 250ms;
  user-select: none;
  width: ${props => (props.full ? '100%' : 'auto')};
  &:disabled {
    cursor: default;
    background-color: ${props => props.theme.colors.lightGray};

    border-radius: ${props => (props.rounded ? '2.8rem' : '0.4rem')};
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.shadowLg};
  }

  &:active {
    transform: translateY(2px);
  }
`
