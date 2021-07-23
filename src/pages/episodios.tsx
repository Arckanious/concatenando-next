import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Card from '../components/card'
import { Main } from '../styles/pages/episodios'
import CardLoading from '../components/cardLoading'
import PageInterface from './_pageInterface'

const Episodios: React.FC<PageInterface> = (props: PageInterface) => {
  const data = props.data
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

  function renderEpisodes() {
    if (!data) {
      return (
        <Main>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </Main>
      )
    }

    return (
      <Main>
        {data.map(data => (
          <Card
            title={data.title}
            description={data.description}
            date={data.date}
            episodeLink={data.episodeLink}
            thumbLink={data.thumbLink}
            key={data.title}
          />
        ))}
      </Main>
    )
  }

  return (
    <>
      <Head>
        <title>Episodios</title>
      </Head>
      <Header page="Episodios" backgroundColored={backgroundColored} />
      {renderEpisodes()}
    </>
  )
}

export default Episodios
