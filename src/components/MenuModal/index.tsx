import React, { useCallback, useState } from 'react'
import {
  Container,
  Icon,
  Separator,
  IconImg,
  IconContainer,
  ListItemContainer,
  List,
  MenuButton,
  MenuIcon,
  ModalHeader
} from './styles'
import {
  faBars,
  faTimes,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer'
import { useRouter } from 'next/dist/client/router'

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
            <MenuButton onClick={closeMenu}>
              <MenuIcon icon={faTimes} />
            </MenuButton>
          </ModalHeader>

          <List>
            {props.elements.map((element, index) => {
              return (
                <>
                  <ListItemContainer
                    key={element.title}
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
                  </ListItemContainer>
                  {index < props.elements.length - 1 ? <Separator /> : null}
                </>
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
      <List>
        {props.elements.map((element, index) => {
          return (
            <>
              <IconContainer>
                {typeof element.icon === 'string' ? (
                  <IconImg src={element.icon} />
                ) : (
                  <Icon icon={element.icon} />
                )}
              </IconContainer>
              {element.title}
            </>
          )
        })}
      </List>
    </>
  )
}

export default Menu
