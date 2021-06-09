import styled from 'styled-components'

export const Container = styled.main`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 1.6rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 980px;
  padding: 2rem 1.2rem;
`
export const Description = styled.p`
  font-size: 1.8rem;
  margin-top: 1.2rem;
  text-align: center;
`

export const Separator = styled.div`
  border-radius: 2px;
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  margin: 2rem;
  width: 60%;
`

export const CardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const ImgEmail = styled.img`
  margin-bottom: 2rem;
  width: 200px;
`
export const FormTitle = styled.h4`
  color: ${props => props.theme.colors.black};
  font-size: 2rem;
  margin-bottom: 2rem;
`
