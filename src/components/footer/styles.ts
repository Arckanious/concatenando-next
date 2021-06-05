import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  padding: 1.4rem;
  height: 112px;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const EmailText = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`

export const EmailIcon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
`
