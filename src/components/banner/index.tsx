import React, { MouseEventHandler, useCallback } from 'react'
import {
  IconButton,
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

interface BannerProps {
  onClick: MouseEventHandler
}

function goToLink() {
  window.open('https://www.twitch.tv/concatenando')
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <BannerContainer>
      <Logo src={LogoImage} />
      <Title>Concatenando</Title>
      <SubTitle>
        Ao vivo <br /> Domingos às 15h <br /> Segundas às 18h30
      </SubTitle>
      <Button rounded color="white" onClick={goToLink}>
        <IconButton icon={faTwitch} />
        Bora Concatenar!!!
      </Button>
      <ArrowContainer onClick={props.onClick}>
        <Arrow icon={faChevronDown} />
      </ArrowContainer>
    </BannerContainer>
  )
}

export default Banner
