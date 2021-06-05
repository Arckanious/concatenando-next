import styled from 'styled-components'

export const Container = styled.article`
  background-color: white;
  max-width: 350px;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;
  color: ${props => props.theme.colors.black};
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
  margin-bottom: 1.2rem;
  line-height: 2rem;
`

export const CardData = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 1.2rem;
`
