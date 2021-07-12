import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Logo = styled.img`
  height: 4.4rem;
  width: 4.4rem;
`

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  height: 5.6rem;
  justify-content: space-between;
  max-width: 980px;
  padding: 0rem 1.6rem;
  width: 100%;
`
export const Container = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`

export const List = styled.ul`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 1.6rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  max-height: 65%;
  max-width: 720px;
  padding: 2rem 1.2rem;
  width: 90%;
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  margin-right: 1.4rem;
  width: 24px;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
`

export const IconImg = styled.img`
  width: 1.6rem;
`

export const Separator = styled.div`
  border-radius: 2px;
  border-top: 2px solid rgba(15, 14, 14, 0.05);
  max-width: 210px;
  width: 100%;
`

export const ListItemContentContainer = styled.div`
  align-items: center;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  max-width: 150px;
  padding: 1.2rem;
  width: 50%;
`

export const ListItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`
export const MenuButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`
