import React from 'react'
import Head from 'next/head'
import Banner from './components/banner'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>

      <Banner />
    </>
  )
}

export default Home
