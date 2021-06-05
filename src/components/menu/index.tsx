import React from 'react'
import {
  Container,
  Icon,
  Separator,
  IconImg,
  ListItem,
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
      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <Icon icon={faMicrophoneAlt} />
          </IconContainer>
          Episódios
        </ListItemContainer>
      </ListItem>
      <Separator />

      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <Icon icon={faSpotify} />
          </IconContainer>
          Spotify
        </ListItemContainer>
      </ListItem>
      <Separator />

      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <Icon icon={faApple} />
          </IconContainer>
          Apple
        </ListItemContainer>
      </ListItem>
      <Separator />

      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <IconImg src={simplecastIcon} />
          </IconContainer>
          Simplecast
        </ListItemContainer>
      </ListItem>
      <Separator />

      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <IconImg src={dezzerIcon} />
          </IconContainer>
          Dizzer
        </ListItemContainer>
      </ListItem>
      <Separator />

      <ListItem>
        <ListItemContainer>
          <IconContainer>
            <Icon icon={faAmazon} />
          </IconContainer>
          Amazon
        </ListItemContainer>
      </ListItem>
    </Container>
  )
}

export default Menu
