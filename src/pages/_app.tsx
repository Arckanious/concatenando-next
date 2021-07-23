import React from 'react'
import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { useFetch } from '../hooks/episodesFetch'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { data } = useFetch('https://feeds.simplecast.com/DRWqL_a0')

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} data={data} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
