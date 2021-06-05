import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Logo = styled.img`
  width: 128px;
  height: 128px;
`

export const IconButton = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  margin-right: 2.4rem;
`

export const Arrow = styled(FontAwesomeIcon)`
  font-size: 24px;
`

export const ArrowContainer = styled.div`
  cursor: pointer;
  &:hover ${Arrow} {
    animation: bounce 600ms infinite;
  }
`

export const BannerContainer = styled.div`
  color: ${props => props.theme.colors.white};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ItensContainer = styled.div`
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Title = styled.h1`
  letter-spacing: 0.8rem;
  font-size: 2.8rem;
  font-weight: 200;
`

export const SubTitle = styled.h2`
  line-height: 2.8rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
`
