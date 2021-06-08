import React from 'react'
import { FormerCointainer, TextArea } from './styles'
import TextField from '../textField'
import Button from '../button'

const Form: React.FC = () => {
  return (
    <FormerCointainer>
      <TextField placeholder="Nome" />
      <TextField placeholder="Email" />
      <TextArea placeholder="Escreva sua mensagem" />
      <Button full> Enviar </Button>
    </FormerCointainer>
  )
}

export default Form
