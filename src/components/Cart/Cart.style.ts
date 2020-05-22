import { lightGrey } from '~/styles/colours'
import styled from 'styled-components'

export const Cart = styled.div`
    .snipcart-modal__container {
        * {
            font-family: 'HelveticaNowText';
        }
        z-index: 1000;
        background-color: ${lightGrey};
    }

    .snipcart-modal {
        background-color: ${lightGrey};
    }

    .snipcart-cart-header {
        background-color: ${lightGrey};
    }

    .snipcart-cart__footer {
        background-color: ${lightGrey};
    }

    .snipcart-cart__content {
        background-color: ${lightGrey};
    }

    .snipcart-discount-box {
        background-color: ${lightGrey};
    }

    .snipcart-discount-box__button {
        border: 1px solid grey;
    }

    .snipcart-cart-button {
        background-image: none;
        background-color: black;
    }
`
