import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 1.6rem;
  padding: 2rem 1.2rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  margin: 0 1.2rem;
  max-height: 65%;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 1.4rem;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
`

export const IconImg = styled.img`
  width: 1.6rem;
`

export const Separator = styled.div`
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  border-radius: 2px;
  width: 60%;
`

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;
  max-width: 120px;
`
