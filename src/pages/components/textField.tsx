import React, { useRef } from 'react'
import {
  Container,
  TextFieldInput,
  TextFieldPlaceHolder
} from '../../styles/components/textField'

interface TextFieldProps {
  placeholder: string
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const placeholderRef = useRef<HTMLParagraphElement>(null)
  function onInputBlur() {
    const isEmpty = !!inputRef.current?.value
    placeholderRef.current?.classList.toggle('placeholderFocus', isEmpty)
  }

  return (
    <Container>
      <TextFieldInput ref={inputRef} onBlur={onInputBlur}></TextFieldInput>
      <TextFieldPlaceHolder ref={placeholderRef}>
        {props.placeholder}
      </TextFieldPlaceHolder>
    </Container>
  )
}

export default TextField
