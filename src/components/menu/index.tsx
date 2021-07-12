import React, { useCallback, useState } from 'react'
import {
  Container,
  Icon,
  Separator,
  IconImg,
  IconContainer,
  ListItemContainer,
  ListItemContentContainer,
  List,
  MenuButton,
  MenuIcon,
  ModalHeader,
  Logo
} from './styles'
import {
  faBars,
  faTimes,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer'
import { useRouter } from 'next/dist/client/router'
import logoImg from '../../assets/icon.svg'

interface ListElement {
  title: string
  link: string
  type: 'internal' | 'external'
  icon: IconDefinition | string
}

interface MenuProps {
  elements: ListElement[]
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
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

  function goToPage(link: string) {
    closeMenu()
    router.push(link)
  }

  function goToLink(link: string) {
    window.open(link)
  }

  function renderModal() {
    if (visible) {
      return (
        <Container>
          <ModalHeader>
            <Logo src={logoImg} />
            <MenuButton onClick={closeMenu}>
              <MenuIcon icon={faTimes} />
            </MenuButton>
          </ModalHeader>

          <List>
            {props.elements.map((element, index) => {
              return (
                <ListItemContainer key={element.title}>
                  <ListItemContentContainer
                    onClick={() =>
                      element.type === 'external'
                        ? goToLink(element.link)
                        : goToPage(element.link)
                    }
                  >
                    <IconContainer>
                      {typeof element.icon === 'string' ? (
                        <IconImg src={element.icon} />
                      ) : (
                        <Icon icon={element.icon} />
                      )}
                    </IconContainer>
                    {element.title}
                  </ListItemContentContainer>
                  {index < props.elements.length - 1 ? <Separator /> : null}
                </ListItemContainer>
              )
            })}
          </List>
          <Footer />
        </Container>
      )
    } else {
      return null
    }
  }

  return (
    <>
      {renderModal()}
      <MenuButton onClick={openMenu}>
        <MenuIcon icon={faBars} />
      </MenuButton>
    </>
  )
}

export default Menu
