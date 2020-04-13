import { Container } from '@material-ui/core'
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
`

export const AppContainer = styled(Container)`
    min-height: 100vh;
    max-width: none;
    padding: 0;
`

export const Main = styled.main``
