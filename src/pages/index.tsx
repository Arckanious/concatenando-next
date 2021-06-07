import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Banner from '../components/banner'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
  const [menuOpened, setMenuOppened] = useState(false)
  const [backgroundColored, setBackgroundColored] = useState(false)
  const [height, setHeight] = useState(0)

  function onMenuClicked() {
    setMenuOppened(!menuOpened)
    document.body.style.overflow = menuOpened ? 'initial' : 'hidden'
  }

  useEffect(() => {
    setHeight(window.innerHeight)
    function listener() {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  useEffect(() => {
    function listener() {
      window.scrollY > height
        ? setBackgroundColored(true)
        : setBackgroundColored(false)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [height])

  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>
      {menuOpened ? <Menu onClick={onMenuClicked} /> : null}
      <Banner />
      <Header
        onClick={onMenuClicked}
        menuIcon={faBars}
        backgroundColored={backgroundColored}
      />
      <Main />
      <Footer />
    </>
  )
}

export default Home
