import { Container } from '@material-ui/core'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        ${({ theme }) => theme.breakpoints.down('sm')} {
            user-select: none;
        }

        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    
    input {
        user-select: all;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: white;
    }
`

export const AppContainer = styled(Container)`
    min-height: 100vh;
    max-width: none;
    padding: 0;
`
