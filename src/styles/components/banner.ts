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
  width: 100vw;
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
  max-width: 60vw;
  line-height: 2.8rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
`

export const Button = styled.button`
  align-items: center;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  display: flex;
  user-select: none;
  transition: 250ms;
  outline: none;
  height: 5.6rem;
  border-radius: 2.8rem;
  background-color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0px 2.8rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }
`
