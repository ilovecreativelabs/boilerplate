import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/icons/favicon-16.png" />
        <link rel="shortcut icon" href="/icons/favicon-32.png" />
        <link rel="shortcut icon" href="/icons/favicon-96.png" />
        <link rel="shortcut icon" href="/icons/icon-57.png" />
        <link rel="shortcut icon" href="/icons/icon-120.png" />
        <link rel="shortcut icon" href="/icons/icon-144.png" />
        <link rel="shortcut icon" href="/icons/icon-152.png" />
        <link rel="apple-touch-icon" href="/icons/icon-180.png" />
        <meta name="theme-color" content="#FF2156" />
        <meta
          name="description"
          content="Conectamos pessoas doadoras de sangue com pessoas que desejam receber as doações."
        />
        <title>I Love donate</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
