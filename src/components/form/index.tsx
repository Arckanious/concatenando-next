/* eslint-disable camelcase */
import React, { useRef, useState } from 'react'
import { ButtonConainer, FormerCointainer, TextFieldContainer } from './styles'
import TextArea from '../textArea'
import TextField from '../textField'
import Button from '../button'
import emailjs from 'emailjs-com'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as yup from 'yup'

interface FormDataInterface {
  from_name: string
  from_email: string
  message: string
}

const FormUnform: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [sent, setSent] = useState(false)

  async function sendEmail(data: FormDataInterface) {
    try {
      formRef.current?.setErrors({})
      const schema = yup.object().shape({
        from_name: yup.string().required('Nome é necessário'),
        from_email: yup
          .string()
          .required('E-mail é necessário')
          .email('Insira um E-mail valido'),
        message: yup.string().required('Conteúdo é necessário')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      emailjs.send(
        'service_d46z9yk',
        'template_kyy6grj',
        { ...data },
        'user_1Rnek2laFUyjl47D3unJM'
      )
      formRef.current?.reset()
      setSent(true)
    } catch (err) {
      const validationErrors = {}
      if (err instanceof yup.ValidationError) {
        console.log(err)
        err.inner.forEach((error: yup.ValidationError) => {
          validationErrors[error.path] = error.message
        })
        formRef.current?.setErrors(validationErrors)
      }
    }
  }

  return (
    <FormerCointainer>
      <Form ref={formRef} id="formId" onSubmit={sendEmail}>
        <TextFieldContainer>
          <TextField type="text" placeholder="Nome" name="from_name" />
          <TextField type="email" placeholder="Email" name="from_email" />
        </TextFieldContainer>
        <TextArea placeholder="Escreva sua mensagem" name="message" />
        <ButtonConainer>
          <Button disabled={sent}> Enviar </Button>
        </ButtonConainer>
      </Form>
    </FormerCointainer>
  )
}

export default FormUnform
