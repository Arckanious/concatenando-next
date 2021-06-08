import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ContainerProps {
  backgroundColored: boolean
}

export const Container = styled.div<ContainerProps>`
  transition: 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.6rem;
  min-height: 5.6rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${props =>
    props.backgroundColored ? props.theme.colors.primary : 'transparent'};
  box-shadow: ${props =>
    props.backgroundColored ? props.theme.shadows.shadowMd : 'none'};
`

export const Logo = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`
export const MenuButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
`
