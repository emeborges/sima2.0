
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'

import theme from '../styles/theme'

import { ChakraProvider } from '@chakra-ui/react'


const MyApp = ({ Component, pageProps }) => {
  return(
        <ThemeProvider theme={theme}>

                        <Component {...pageProps} />
                        <GlobalStyle />
        </ThemeProvider>


  )

}

export default MyApp
