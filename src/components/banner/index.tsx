import React from 'react'
import {
  IconButton,
  ItensContainer,
  Title,
  Logo,
  SubTitle,
  Arrow,
  ArrowContainer,
  BannerContainer
} from './styles'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import LogoImage from '../../assets/icon.svg'
import Button from '../button'

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <ItensContainer>
        <Logo src={LogoImage} />
        <Title>Concatenando</Title>
        <SubTitle>
          Ao vivo <br /> Domingos às 15h <br /> Segundas às 18h30
        </SubTitle>
        <Button rounded color="white">
          <IconButton icon={faTwitch} />
          Bora Concatenar!!!
        </Button>
        <ArrowContainer>
          <Arrow icon={faChevronDown} />
        </ArrowContainer>
      </ItensContainer>
    </BannerContainer>
  )
}

export default Banner
