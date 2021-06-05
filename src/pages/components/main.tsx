import React from 'react'
import {
  CardContainer,
  Container,
  Description,
  FormTitle,
  ImgEmail,
  LoadButon,
  Separator
} from '../../styles/components/main'
import Card from './card'
import Form from './form'
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
      <LoadButon>Carregar Mais</LoadButon>
      <Separator />
      <ImgEmail src={imgEmailFile} />
      <FormTitle>Vamos conversar?</FormTitle>
      <Form />
    </Container>
  )
}

export default Main
