import { lightGrey } from '~/styles/colours'
import styled from 'styled-components'

export const OverrideCartStyles = styled.div`
    .snipcart-modal__container {
        * {
            font-family: 'HelveticaNowText';
        }
        z-index: 1000;
        background-color: ${lightGrey};
    }

    .snipcart-modal,
    .snipcart-cart-header,
    .snipcart-cart__footer,
    .snipcart-cart__content,
    .snipcart-discount-box,
    .snipcart-cart-button,
    .snipcart__box--badge-highlight {
        background: none;
    }

    .snipcart-discount-box__button {
        border: 1px solid grey;
    }

    .snipcart-cart-button,
    .snipcart__box--badge-highlight {
        background-color: black;
    }

    .snipcart-featured-payment-methods {
        border-top: 1px solid grey;
    }

    .snipcart-cart-header {
        justify-content: space-between;

        button {
            display: flex;
            cursor: pointer;
        }
    }

    .snipcart-item-line__actions {
        .snipcart__button--icon {
            border: none;
            svg {
                display: none;
            }
            :after {
                content: 'x';
                font-size: ${({ theme }) => theme.spacing(5)};
            }
        }
    }

    button {
        outline: none;
    }
`
