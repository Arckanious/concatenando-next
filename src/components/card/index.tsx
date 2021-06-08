import React from 'react'
import {
  CardData,
  CardDescription,
  CardTitle,
  Container,
  ContainerText,
  Thumb
} from './styles'

const Card: React.FC = () => {
  return (
    <Container>
      <Thumb src="https://picsum.photos/300/200" />
      <ContainerText>
        <CardTitle>Titulo</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          temporibus nam facere quasi omnis consequatur illum quod veniam iste.
          Eligendi perspiciatis unde quibusdam earum iusto laboriosam cum,
          aliquid beatae quidem!
        </CardDescription>
        <CardData>01 de Mai de 2021</CardData>
      </ContainerText>
    </Container>
  )
}

export default Card
