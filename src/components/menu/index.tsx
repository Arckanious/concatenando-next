import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'react'
import {
  Container,
  Icon,
  Separator,
  IconImg,
  IconContainer,
  ListItemContainer,
  List
} from './styles'
import {
  faApple,
  faSpotify,
  faAmazon
} from '@fortawesome/free-brands-svg-icons'
import { faMicrophoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import dezzerIcon from '../../assets/dizzerIcon.svg'
import simplecastIcon from '../../assets/simplecastIcon.svg'
import Footer from '../footer'
import Header from '../header'

export interface MenuHandles {
  openMenu: () => void
  closeMenu: () => void
}

const Menu: React.ForwardRefRenderFunction<MenuHandles> = (props, ref) => {
  const [visible, setVisible] = useState(false)

  const openMenu = useCallback(() => {
    setVisible(true)
  }, [])

  const closeMenu = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openMenu,
      closeMenu
    }
  })
  if (visible) {
    return (
      <Container>
        <Header
          onClick={closeMenu}
          menuIcon={faTimes}
          backgroundColored={false}
        />
        <List>
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
        </List>
        <Footer />
      </Container>
    )
  } else {
    return null
  }
}

export default forwardRef(Menu)
