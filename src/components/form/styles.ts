import styled from 'styled-components'

export const FormerCointainer = styled.div`
  width: 100%;
`

export const ButtonConainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const TextFieldContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`
