import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  animation: is-pulsing 0.3s ease-in alternate infinite;
  background-color: rgba(15, 14, 14, 0.05);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  position: relative;
  width: 100%;
`

export const ContainerText = styled.div`
  padding: 1.4rem;
`

export const Thumb = styled.div`
  background-color: rgba(15, 14, 14, 0.2);
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`
export const Icon = styled(FontAwesomeIcon)`
  color: rgba(15, 14, 14, 0.1);
  font-size: 9.6rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const CardTitle = styled.div`
  background-color: rgba(15, 14, 14, 0.2);
  font-size: 2.8rem;
  height: 32px;
  margin-bottom: 1.6rem;
  width: 60%;
`

interface CardDescriptionProps {
  width: string
}

export const CardDescription = styled.div<CardDescriptionProps>`
  background-color: rgba(15, 14, 14, 0.2);
  height: 12px;
  margin-bottom: 0.5rem;
  width: ${props => props.width};
`

export const CardData = styled.div`
  background-color: rgba(15, 14, 14, 0.1);
  height: 8px;
  margin-top: 1.4rem;
  width: 35%;
`
