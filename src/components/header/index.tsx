import React from 'react'
import Link from 'next/link'
import { Logo, Container, ContentContainer } from './styles'
import logoImg from '../../assets/icon.svg'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import {
  faApple,
  faSpotify,
  faAmazon
} from '@fortawesome/free-brands-svg-icons'
import Menu from '../menu'
import dezzerIcon from '../../assets/dizzerIcon.svg'
import simplecastIcon from '../../assets/simplecastIcon.svg'

interface HeaderProps {
  backgroundColored: boolean
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Container backgroundColored={props.backgroundColored}>
      <ContentContainer>
        <Link href="/">
          <Logo src={logoImg} />
        </Link>
        <Menu
          elements={[
            {
              title: 'Episódios',
              link: '/episodios',
              type: 'internal',
              icon: faMicrophoneAlt
            },
            {
              title: 'Spotify',
              link: 'https://open.spotify.com/show/7lHEaseAF5Lp2UPyqpH81l',
              type: 'external',
              icon: faSpotify
            },
            {
              title: 'Apple',
              link: 'https://podcasts.apple.com/br/podcast/concatenando/id1536297575',
              type: 'external',
              icon: faApple
            },
            {
              title: 'Simplecast',
              link: 'https://concatenando.simplecast.com/',
              type: 'external',
              icon: simplecastIcon
            },
            {
              title: 'Deezer',
              link: 'https://www.deezer.com/search/concatenando',
              type: 'external',
              icon: dezzerIcon
            },
            {
              title: 'Amazon',
              link: 'https://music.amazon.com.br/podcasts/83dab262-116b-4434-a445-5a57fe0515d4/Concatenando',
              type: 'external',
              icon: faAmazon
            }
          ]}
        />
      </ContentContainer>
    </Container>
  )
}

export default Header
