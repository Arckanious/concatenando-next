import { useField } from '@unform/core'
import React, { useRef } from 'react'
import { ErrorContainer, TextAreaContainer } from './styles'

interface TextAreaProps {
  name: string
  placeholder: string
}

type InputProps = JSX.IntrinsicElements['input'] & TextAreaProps

const TextField: React.FC<InputProps> = ({
  name,
  placeholder,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
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

  return (
    <>
      <TextAreaContainer
        placeholder={placeholder}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </>
  )
}

export default TextField
