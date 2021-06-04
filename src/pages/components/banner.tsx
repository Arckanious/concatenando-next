import React from 'react'
import {
  Button,
  IconButton,
  ItensContainer,
  Title,
  Logo,
  SubTitle,
  Arrow,
  ArrowContainer,
  BannerContainer
} from '../../styles/components/banner'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import LogoImage from '../../assets/icon.svg'

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <ItensContainer>
        <Logo src={LogoImage} />
        <Title>Concatenando</Title>
        <SubTitle>Ao vivo, todo domingo às 15h e segunda as 18h30</SubTitle>
        <Button>
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
