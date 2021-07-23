import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: grid;
  grid-gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  padding: 1.4rem;
  width: 100%;
  @media (min-width: 800px) {
    padding: 1.4rem 4.8rem;
  } ;
`
