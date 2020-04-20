import { Box, Container } from '@material-ui/core'

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    a {
        text-decoration: none;
    }
`

export const AppContainer = styled(Container)`
    min-height: 100vh;
    max-width: none;
    padding: 0;
`

export const Main = styled.main``

export const BlurLayer = styled(Box)`
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
`
