import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  animation: is-pulsing 0.3s ease-in alternate infinite;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 14, 14, 0.05);
  width: 100%;
  max-width: 350px;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  margin-bottom: 2.5rem;
`

export const ContainerText = styled.div`
  padding: 1.4rem;
`

export const Thumb = styled.div`
  background-color: rgba(15, 14, 14, 0.2);
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Icon = styled(FontAwesomeIcon)`
  color: rgba(15, 14, 14, 0.1);
  font-size: 9.6rem;
`
export const CardTitle = styled.div`
  background-color: rgba(15, 14, 14, 0.2);
  width: 60%;
  height: 32px;
  font-size: 2.8rem;
  margin-bottom: 1.6rem;
`

interface CardDescriptionProps {
  width: string
}

export const CardDescription = styled.div<CardDescriptionProps>`
  background-color: rgba(15, 14, 14, 0.2);
  width: ${props => props.width};
  height: 12px;
  margin-bottom: 0.5rem;
`

export const CardData = styled.div`
  background-color: rgba(15, 14, 14, 0.1);
  width: 35%;
  height: 8px;
  margin-top: 1.4rem;
`
