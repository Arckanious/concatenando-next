import React from 'react'
import Link from 'next/link'
import {
  CardContainer,
  Container,
  Description,
  FormTitle,
  ImgEmail,
  Separator
} from './styles'
import Button from '../button'
import Card from '../card'
import Form from '../form'
import imgEmailFile from '../../assets/imgEmail.svg'

const Main: React.FC = () => {
  return (
    <Container>
      <Description>Um podcast.</Description>
      <Description>Uma comunidade.</Description>
      <Description>A nossa roda de conversa.</Description>

      <Separator />

      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Link href="/episodios">
        <Button rounded>Mostrar Mais</Button>
      </Link>

      <Separator />

      <ImgEmail src={imgEmailFile} />
      <FormTitle>Vamos conversar?</FormTitle>
      <Form />
    </Container>
  )
}

export default Main
