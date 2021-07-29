import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3.4rem;
  margin-top: 2.8rem;
  text-transform: uppercase;
`

export const Container = styled.main`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  padding: 1.4rem;
  width: 100%;
  @media (min-width: 800px) {
    padding: 1.4rem 4.8rem;
  } ;
`

export const Main = styled.section`
  align-items: center;
  display: grid;
  grid-gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const Separator = styled.div`
  border-radius: 2px;
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  margin: 2rem 0;
  width: 60%;
`
