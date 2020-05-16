import { Box, Container } from '@material-ui/core'

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    a {
        text-decoration: none;
    }
    .snipcart-modal__container {
        /* width: 50vw !important;
        left: 50% !important; */
        background-color: transparent !important;
        position: absolute;
        z-index: 1000 !important;
    }
    .snipcart-cart-header {
        background-color: transparent !important;
    }
    .snipcart-cart__content {
        background-color: transparent !important;
    }
    .snipcart-item-line {
        background-color: transparent !important;
    }
`

export const AppContainer = styled(Container)`
    min-height: 100vh;
    max-width: none;
    padding: 0;
`
