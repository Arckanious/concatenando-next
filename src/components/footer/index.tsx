import React from 'react'
import { Container, IconsContainer, EmailText, EmailIcon, Icon } from './styles'
import {
  faTwitch,
  faTwitter,
  faDiscord,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function goToLink(link: string) {
  window.open(link)
}

const Footer: React.FC = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon
          icon={faTwitter}
          onClick={() => goToLink('https://twitter.com/oConcatenando')}
        />
        <Icon
          icon={faDiscord}
          onClick={() => goToLink('https://discord.com/invite/5mDgaRG')}
        />
        <Icon
          icon={faTwitch}
          onClick={() => goToLink('https://www.twitch.tv/concatenando')}
        />
        <Icon
          icon={faFacebookF}
          onClick={() =>
            goToLink('https://www.facebook.com/ConcatenandoOficial/')
          }
        />
        <Icon
          icon={faInstagram}
          onClick={() =>
            goToLink('https://www.instagram.com/concatenando_oficial/')
          }
        />
      </IconsContainer>

      <EmailText>
        <EmailIcon icon={faEnvelope} />
        contato@concatenando.com.br
      </EmailText>
    </Container>
  )
}

export default Footer
