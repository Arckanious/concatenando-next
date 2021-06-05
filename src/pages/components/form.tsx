import React from 'react'
import {
  FormButtom,
  FormerCointainer,
  TextArea
} from '../../styles/components/form'
import TextField from './textField'

const Form: React.FC = () => {
  return (
    <FormerCointainer>
      <TextField placeholder="Nome" />
      <TextField placeholder="Email" />
      <TextArea placeholder="Escreva sua mensagem" />
      <FormButtom> Enviar </FormButtom>
    </FormerCointainer>
  )
}

export default Form
