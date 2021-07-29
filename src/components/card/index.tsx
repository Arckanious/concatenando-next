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
import fallBackThumb from '../../assets/concatenandoLogo.jpg'

interface CardProps {
  title: string
  description: string
  date: string
  episodeLink: string
  thumbLink: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <Container onClick={() => window.open(props.episodeLink)}>
      <Thumb src={props.thumbLink ? props.thumbLink : fallBackThumb} />
      <ContainerText>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardData>{props.date}</CardData>
      </ContainerText>
    </Container>
  )
}

export default Card
