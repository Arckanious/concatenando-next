import React from 'react'
import {
  Container,
  Icon,
  Separator,
  IconImg,
  IconContainer,
  ListItemContainer
} from './styles'
import {
  faApple,
  faSpotify,
  faAmazon
} from '@fortawesome/free-brands-svg-icons'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import dezzerIcon from '../../assets/dizzerIcon.svg'
import simplecastIcon from '../../assets/simplecastIcon.svg'

const Menu: React.FC = () => {
  return (
    <Container>
      <ListItemContainer>
        <IconContainer>
          <Icon icon={faMicrophoneAlt} />
        </IconContainer>
        Episódios
      </ListItemContainer>

      <Separator />

      <ListItemContainer>
        <IconContainer>
          <Icon icon={faSpotify} />
        </IconContainer>
        Spotify
      </ListItemContainer>

      <Separator />

      <ListItemContainer>
        <IconContainer>
          <Icon icon={faApple} />
        </IconContainer>
        Apple
      </ListItemContainer>

      <Separator />

      <ListItemContainer>
        <IconContainer>
          <IconImg src={simplecastIcon} />
        </IconContainer>
        Simplecast
      </ListItemContainer>
      <Separator />
      <ListItemContainer>
        <IconContainer>
          <IconImg src={dezzerIcon} />
        </IconContainer>
        Dizzer
      </ListItemContainer>

      <Separator />

      <ListItemContainer>
        <IconContainer>
          <Icon icon={faAmazon} />
        </IconContainer>
        Amazon
      </ListItemContainer>
    </Container>
  )
}

export default Menu
