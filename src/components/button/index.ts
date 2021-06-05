import styled from 'styled-components'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'white' | undefined
  rounded?: boolean
  full?: boolean
}

export default styled.button<ButtonProps>`
  color: ${props =>
    props.color === 'white'
      ? props.theme.colors.black
      : props.theme.colors.white};
  background-color: ${props =>
    props.theme.colors[props.color ? props.color : 'primary']};

  width: ${props => (props.full ? '100%' : 'auto')};
  border-radius: ${props => (props.rounded ? '2.8rem' : '0.4rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: 250ms;
  outline: none;
  height: 5.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0px 2.4rem;
  box-shadow: ${props => props.theme.shadows.shadowSm};

  &:hover {
    box-shadow: ${props => props.theme.shadows.shadowLg};
  }

  &:active {
    transform: translateY(2px);
  }
`
