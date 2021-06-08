import React from 'react'
import {
  CardData,
  CardDescription,
  CardTitle,
  Container,
  ContainerText,
  Icon,
  Thumb
} from './styles'
import { faImage } from '@fortawesome/free-solid-svg-icons'
const CardLoading: React.FC = () => {
  return (
    <Container>
      <Thumb>
        <Icon icon={faImage} />
      </Thumb>
      <ContainerText>
        <CardTitle />
        <CardDescription width="90%" />
        <CardDescription width="88%" />
        <CardDescription width="100%" />
        <CardDescription width="85%" />
        <CardDescription width="90%" />
        <CardDescription width="40%" />
        <CardData />
      </ContainerText>
    </Container>
  )
}

export default CardLoading
