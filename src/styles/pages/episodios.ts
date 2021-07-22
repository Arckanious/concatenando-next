import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem 1.4rem;
`
