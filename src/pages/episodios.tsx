import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Card from '../components/card'
import { Main } from '../styles/pages/episodios'
import CardLoading from '../components/cardLoading'
import { useFetch } from '../hooks/episodesFetch'

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
  const { data } = useFetch('https://feeds.simplecast.com/DRWqL_a0')

  function renderEpisodes() {
    if (!data) {
      return (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      )
    }

    return (
      <ul>
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
      </ul>
    )
  }

  return (
    <>
      <Head>
        <title>Episodios</title>
      </Head>
      <Header backgroundColored={backgroundColored} />
      <Main>{renderEpisodes()}</Main>
    </>
  )
}

export default Episodios
