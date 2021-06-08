import React, { useRef, useState } from 'react'
import { Container, TextFieldInput, TextFieldPlaceHolder } from './styles'

interface TextFieldProps {
  placeholder: string
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEmpty, setIsEmpy] = useState(true)

  function onInputBlur() {
    setIsEmpy(!inputRef.current?.value)
  }

  return (
    <Container>
      <TextFieldInput ref={inputRef} onBlur={onInputBlur}></TextFieldInput>
      <TextFieldPlaceHolder isEmpty={isEmpty}>
        {props.placeholder}
      </TextFieldPlaceHolder>
    </Container>
  )
}

export default TextField
