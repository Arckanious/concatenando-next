import styled from 'styled-components'

export const Container = styled.article`
  background-color: white;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: ${props => props.theme.shadows.shadowMd};
  color: ${props => props.theme.colors.black};
  margin-bottom: 2.5rem;
  max-width: 350px;
`

export const ContainerText = styled.section`
  padding: 1.4rem;
`

export const Thumb = styled.img`
  width: 100%;
`

export const CardTitle = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 1.6rem;
`

export const CardDescription = styled.p`
  line-height: 2rem;
  margin-bottom: 1.2rem;
`

export const CardData = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 1.2rem;
`
