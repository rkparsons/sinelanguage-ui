import { contentOffsetDesktop, contentOffsetMobile } from '~/styles/sizes'

import styled from 'styled-components'

export const Cart = styled.div`
    .snipcart-modal__container {
        * {
            font-family: 'HelveticaNowText';
            /* color: white; */
        }
        position: absolute;
        z-index: 1000;

        /* 
        background-color: transparent;
        
        ${({ theme }) => `    
        padding-top: ${theme.spacing(contentOffsetMobile)};
                
        ${theme.breakpoints.up('sm')} {
            padding-top: ${theme.spacing(contentOffsetDesktop)};
        } */
    `}
    }

    /* .snipcart-modal {
        background-color: transparent;
    }

    .snipcart-cart-header {
        background-color: transparent;
    }

    .snipcart-cart__content {
        background-color: transparent;
    }

    .snipcart-item-line {
        background-color: transparent;
    } */
`
