import React, { FormEvent, useRef, useState } from 'react'
import {
  ButtonConainer,
  FormerCointainer,
  TextArea,
  TextFieldContainer
} from './styles'
import TextField from '../textField'
import Button from '../button'
import emailjs from 'emailjs-com'

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  function sendEmail(event: FormEvent) {
    event.preventDefault()
    emailjs.sendForm(
      'service_d46z9yk',
      'template_kyy6grj',
      formRef.current || '',
      'user_1Rnek2laFUyjl47D3unJM'
    )
    formRef.current?.reset()
    setSent(true)
  }
  return (
    <FormerCointainer ref={formRef} onSubmit={sendEmail}>
      <TextFieldContainer>
        <TextField type="text" placeholder="Nome" name="from_name" />
        <TextField type="email" placeholder="Email" name="from_email" />
      </TextFieldContainer>
      <TextArea placeholder="Escreva sua mensagem" name="message" />
      <ButtonConainer>
        <Button disabled={sent}> Enviar </Button>
      </ButtonConainer>
    </FormerCointainer>
  )
}

export default Form
