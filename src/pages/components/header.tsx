import React from 'react'
import { Logo, Container, MenuIcon } from '../../styles/components/header'
import logoImg from '../../assets/icon.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} />
      <MenuIcon icon={faBars} />
    </Container>
  )
}

export default Header
