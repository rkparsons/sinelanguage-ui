import { Box, Container } from '@material-ui/core'

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        user-select: none;
        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
        }
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
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
