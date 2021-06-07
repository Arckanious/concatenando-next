import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Banner from '../components/banner'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu, { MenuHandles } from '../components/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
  const [backgroundColored, setBackgroundColored] = useState(false)
  const [height, setHeight] = useState(0)
  const menuRef = useRef<MenuHandles>(null)

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

  function openMenu() {
    menuRef.current?.openMenu()
  }

  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>
      <Menu ref={menuRef} />
      <Banner />
      <Header
        onClick={openMenu}
        menuIcon={faBars}
        backgroundColored={backgroundColored}
      />
      <Main />
      <Footer />
    </>
  )
}

export default Home
