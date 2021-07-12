import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Banner from '../components/banner'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: React.FC = () => {
  const [height, setHeight] = useState(0)
  const [backgroundColored, setBackgroundColored] = useState(false)

  useEffect(() => {
    setHeight(window.innerHeight)
    function listener() {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
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

  function jumpBanner() {
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>

      <Banner onClick={jumpBanner} />
      <Header page="Home" backgroundColored={backgroundColored} />
      <Main />
      <Footer />
    </>
  )
}

export default Home
