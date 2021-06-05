import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.6rem;
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`
