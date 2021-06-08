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
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export interface MenuHandles {
  openMenu: () => void
  closeMenu: () => void
}

const Menu: React.ForwardRefRenderFunction<MenuHandles> = (props, ref) => {
  function goToLink(link: string) {
    window.open(link)
  }

  const [visible, setVisible] = useState(false)
  const router = useRouter()

  const openMenu = useCallback(() => {
    document.body.style.overflow = 'hidden'
    setVisible(true)
  }, [])

  const closeMenu = useCallback(() => {
    document.body.style.overflow = 'initial'
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openMenu,
      closeMenu
    }
  })

  function goToEpisodios() {
    closeMenu()
    router.push('/episodios')
  }

  if (visible) {
    return (
      <Container>
        <Header
          onClick={closeMenu}
          menuIcon={faTimes}
          backgroundColored={false}
        />
        <List>
          <ListItemContainer onClick={() => goToEpisodios()}>
            <IconContainer>
              <Icon icon={faMicrophoneAlt} />
            </IconContainer>
            Episódios
          </ListItemContainer>

          <Separator />

          <ListItemContainer
            onClick={() =>
              goToLink('https://open.spotify.com/show/7lHEaseAF5Lp2UPyqpH81l')
            }
          >
            <IconContainer>
              <Icon icon={faSpotify} />
            </IconContainer>
            Spotify
          </ListItemContainer>

          <Separator />

          <ListItemContainer
            onClick={() =>
              goToLink(
                'https://podcasts.apple.com/br/podcast/concatenando/id1536297575'
              )
            }
          >
            <IconContainer>
              <Icon icon={faApple} />
            </IconContainer>
            Apple
          </ListItemContainer>

          <Separator />

          <ListItemContainer
            onClick={() => goToLink('https://concatenando.simplecast.com/')}
          >
            <IconContainer>
              <IconImg src={simplecastIcon} />
            </IconContainer>
            Simplecast
          </ListItemContainer>

          <Separator />

          <ListItemContainer
            onClick={() =>
              goToLink('https://www.deezer.com/search/concatenando')
            }
          >
            <IconContainer>
              <IconImg src={dezzerIcon} />
            </IconContainer>
            Dizzer
          </ListItemContainer>

          <Separator />

          <ListItemContainer
            onClick={() =>
              goToLink(
                'https://music.amazon.com.br/podcasts/83dab262-116b-4434-a445-5a57fe0515d4/Concatenando'
              )
            }
          >
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
