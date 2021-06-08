import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${props => props.theme.colors.white};
  border-radius: 1.6rem;
  padding: 2rem 1.2rem;
  box-shadow: ${props => props.theme.shadows.shadowTopMd},
    ${props => props.theme.shadows.shadowMd};
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Description = styled.p`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 1.2rem;
`

export const Separator = styled.div`
  margin: 2rem;
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  border-radius: 2px;
  width: 60%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgEmail = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`
export const FormTitle = styled.h4`
  font-size: 2rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: 2rem;
`
