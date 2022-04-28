
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'



import theme from '../styles/theme'

import { ChakraProvider } from '@chakra-ui/react'


const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>

            <ChakraProvider>
                <Component {...pageProps} />
                <GlobalStyle />
            </ChakraProvider>

        </ThemeProvider>


    )

}

export default MyApp
