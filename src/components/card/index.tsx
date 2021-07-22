import Link from 'next/link'
import React from 'react'
import {
  CardData,
  CardDescription,
  CardTitle,
  Container,
  ContainerText,
  Thumb
} from './styles'

interface CardProps {
  title: string
  description: string
  date: string
  episodeLink: string
  thumbLink: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <Link href={props.episodeLink}>
      <Container>
        <Thumb src={props.thumbLink} />
        <ContainerText>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
          <CardData>{props.date}</CardData>
        </ContainerText>
      </Container>
    </Link>
  )
}

export default Card
