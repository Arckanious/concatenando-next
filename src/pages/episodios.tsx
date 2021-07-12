import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Menu from '../components/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/card'
import { Main } from '../styles/pages/episodios'
import CardLoading from '../components/cardLoading'

const Episodios: React.FC = () => {
  const [backgroundColored, setBackgroundColored] = useState(false)
  useEffect(() => {
    function listener() {
      window.scrollY > 0
        ? setBackgroundColored(true)
        : setBackgroundColored(false)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return (
    <>
      <Head>
        <title>Episodios</title>
      </Head>
      <Header backgroundColored={backgroundColored} />
      <Main>
        <Card />
        <Card />
        <Card />
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
