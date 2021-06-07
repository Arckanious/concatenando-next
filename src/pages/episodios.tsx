import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Menu from '../components/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/card'
import { Main } from '../styles/pages/episodios'
import CardLoading from '../components/cardLoading'

const Episodios: React.FC = () => {
  const [menuOpened, setMenuOppened] = useState(false)
  const [backgroundColored, setBackgroundColored] = useState(false)

  function onMenuClicked() {
    setMenuOppened(!menuOpened)
    document.body.style.overflow = menuOpened ? 'initial' : 'hidden'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0
        ? setBackgroundColored(true)
        : setBackgroundColored(false)
    })
  })

  return (
    <>
      <Head>
        <title>Episodios</title>
      </Head>
      <div>{menuOpened ? <Menu onClick={onMenuClicked} /> : null}</div>
      <Header
        onClick={onMenuClicked}
        menuIcon={faBars}
        backgroundColored={backgroundColored}
      />
      <Main>
        <Card />
        <Card />
        <Card />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </Main>
    </>
  )
}

export default Episodios
