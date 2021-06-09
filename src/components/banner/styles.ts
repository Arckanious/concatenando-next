import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Logo = styled.img`
  height: 128px;
  width: 128px;
`

export const IconButton = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  margin-right: 2.4rem;
`

export const Arrow = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.white};
  font-size: 24px;
`

export const ArrowContainer = styled.button`
  background-color: transparent;
  cursor: pointer;
  &:hover ${Arrow} {
    animation: bounce 600ms infinite;
  }
`

export const BannerContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  padding: 4.8rem 0;
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 200;
  letter-spacing: 0.8rem;
`

export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.8rem;
  text-align: center;
`
