import { useField } from '@unform/core'
import React, { useRef, useState } from 'react'
import {
  Container,
  ErrorContainer,
  TextFieldInput,
  TextFieldPlaceHolder
} from './styles'

interface TextFieldProps {
  name: string
  placeholder: string
}

type InputProps = JSX.IntrinsicElements['input'] & TextFieldProps

const TextField: React.FC<InputProps> = ({
  name,
  placeholder,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEmpty, setIsEmpy] = useState(true)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      }
    })
  }, [fieldName, registerField])

  function onInputBlur() {
    setIsEmpy(!inputRef.current?.value)
  }

  return (
    <Container>
      <TextFieldInput
        id={fieldName}
        ref={inputRef}
        onBlur={onInputBlur}
        defaultValue={defaultValue}
        {...rest}
      ></TextFieldInput>
      <TextFieldPlaceHolder isEmpty={isEmpty}>
        {placeholder}
      </TextFieldPlaceHolder>
      <ErrorContainer>{error}</ErrorContainer>
    </Container>
  )
}

export default TextField
