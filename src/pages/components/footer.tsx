import React from 'react'
import {
  Container,
  IconsContainer,
  EmailText,
  EmailIcon,
  Icon
} from '../../styles/components/footer'
import {
  faTwitch,
  faTwitter,
  faDiscord,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon icon={faTwitter} />
        <Icon icon={faDiscord} />
        <Icon icon={faTwitch} />
        <Icon icon={faFacebookF} />
        <Icon icon={faInstagram} />
      </IconsContainer>

      <EmailText>
        <EmailIcon icon={faEnvelope} />
        contato@concatenando.com.br
      </EmailText>
    </Container>
  )
}

export default Footer
