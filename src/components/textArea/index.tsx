import { useField } from '@unform/core'
import React, { useRef } from 'react'
import { ErrorContainer, TextAreaContainer } from './styles'

interface TextAreaProps {
  name: string
  placeholder: string
}

type InputProps = JSX.IntrinsicElements['textarea'] & TextAreaProps

const TextField: React.FC<InputProps> = ({
  name,
  placeholder,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
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
