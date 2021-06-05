import React from 'react'
import Head from 'next/head'
import Banner from './components/banner'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Concatenando</title>
      </Head>
      <Banner />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home
