import React from 'react'
import {
  ButtonConainer,
  FormerCointainer,
  TextArea,
  TextFieldContainer
} from './styles'
import TextField from '../textField'
import Button from '../button'

const Form: React.FC = () => {
  return (
    <FormerCointainer>
      <TextFieldContainer>
        <TextField placeholder="Nome" />
        <TextField placeholder="Email" />
      </TextFieldContainer>
      <TextArea placeholder="Escreva sua mensagem" />
      <ButtonConainer>
        <Button> Enviar </Button>
      </ButtonConainer>
    </FormerCointainer>
  )
}

export default Form
