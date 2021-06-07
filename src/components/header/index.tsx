import React, { MouseEventHandler } from 'react'
import { Logo, Container, MenuIcon, MenuButton } from './styles'
import logoImg from '../../assets/icon.svg'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface HeaderProps {
  onClick: MouseEventHandler
  menuIcon: IconDefinition
}

interface HeaderProps {
  backgroundColored: boolean
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Container backgroundColored={props.backgroundColored}>
      <Logo src={logoImg} />
      <MenuButton onClick={props.onClick}>
        <MenuIcon icon={props.menuIcon} />
      </MenuButton>
    </Container>
  )
}

export default Header
