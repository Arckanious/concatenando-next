import React, { useState } from 'react'
import Head from 'next/head'
import Banner from '../components/banner'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { ContainerMenu } from '../styles/pages/home'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
  const [menuOpened, setMenuOppened] = useState(false)

  function onMenuClicked() {
    setMenuOppened(!menuOpened)
  }

  function renderMenu() {
    return (
      <ContainerMenu>
        <Header onClick={onMenuClicked} menuIcon={faTimes} />
        <Menu />
        <Footer />
      </ContainerMenu>
    )
  }

  function renderMain() {
    return (
      <>
        <Banner />
        <Header onClick={onMenuClicked} menuIcon={faBars} />
        <Main />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>
      {menuOpened ? renderMenu() : renderMain()}
    </>
  )
}

export default Home
