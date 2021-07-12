import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  height: 11.2rem;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const EmailText = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`

export const EmailIcon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
`
