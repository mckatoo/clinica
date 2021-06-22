import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

import { ApolloProvider } from '@apollo/client'

function App ({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Clinica de Saúde - Uniesi</title>
          <link rel='shortcut icon' href='/img/icon-512.png' />
          <link rel='apple-touch-icon' href='/img/icon-512.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta
            name='description'
            content='Clínica de Saúde da Faculdade Uniesi - A comunidade cuidando da comunidade.'
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
