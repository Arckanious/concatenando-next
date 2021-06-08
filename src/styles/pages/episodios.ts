import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  padding: 2rem 1.4rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  align-items: center;
  flex-direction: column;
`
