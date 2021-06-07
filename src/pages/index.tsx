import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Banner from '../components/banner'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu, { MenuHandles } from '../components/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ScrollContainer, ScrollItem } from '../styles/pages/home'

const Home: React.FC = () => {
  let height = 0
  const [backgroundColored, setBackgroundColored] = useState(false)
  const menuRef = useRef<MenuHandles>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    height = window.innerHeight
    function listener() {
      height = window.innerHeight
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  })

  useEffect(() => {
    function listener() {
      if (scrollContainerRef.current?.scrollTop === undefined) {
        return null
      } else {
        scrollContainerRef.current?.scrollTop > height
          ? setBackgroundColored(true)
          : setBackgroundColored(false)
      }
    }
    scrollContainerRef.current?.addEventListener('scroll', listener)
    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', listener)
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
      <ScrollContainer ref={scrollContainerRef}>
        <ScrollItem>
          <Banner />
        </ScrollItem>
        <ScrollItem>
          <Header
            onClick={openMenu}
            menuIcon={faBars}
            backgroundColored={backgroundColored}
          />
          <Main />
          <Footer />
        </ScrollItem>
      </ScrollContainer>
    </>
  )
}

export default Home
