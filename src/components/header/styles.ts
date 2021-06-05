import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.6rem;
  height: 56px;
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`
export const MenuButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
`
