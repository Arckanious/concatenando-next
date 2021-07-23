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
import PageInterface from '../../interfaces/_pageInterface'
import CardLoading from '../cardLoading'

const Main: React.FC<PageInterface> = (props: PageInterface) => {
  const count = [0, 1, 2]
  function renderCards() {
    if (!props.data) {
      return (
        <CardContainer>
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </CardContainer>
      )
    }

    return (
      <CardContainer>
        {count.map(index => {
          const item = props.data ? props.data[index] : null
          return (
            <Card
              title={item?.title || ''}
              description={item?.description || ''}
              date={item?.date || ''}
              episodeLink={item?.episodeLink || ''}
              thumbLink={item?.thumbLink || ''}
              key={item?.title || ''}
            />
          )
        })}
      </CardContainer>
    )
  }
  return (
    <Container>
      <Description>Um podcast.</Description>
      <Description>Uma comunidade.</Description>
      <Description>A nossa roda de conversa.</Description>

      <Separator />

      {renderCards()}
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
