import { darkShadow } from '~/styles/shadows'
import { lightGrey } from '~/styles/colours'
import styled from 'styled-components'

export const OverrideCartStyles = styled.div`
    * {
        animation: none !important;
    }

    .snipcart-modal__container {
        * {
            font-family: 'HelveticaNowText';
        }
        z-index: 1000;
        background-color: white;
    }

    .snipcart-modal,
    .snipcart-cart-header,
    .snipcart-cart__footer,
    .snipcart-cart__content,
    .snipcart-discount-box,
    .snipcart-cart-button,
    .snipcart__box--badge-highlight,
    .snipcart-cart-summary,
    .snipcart-cart__secondary-header,
    .snipcart-featured-payment-methods__title {
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
        border-top: none;
    }

    .snipcart-cart-summary-fees__notice {
        display: none;
    }

    .snipcart-cart__checkout-button {
        svg {
            opacity: 0;
        }
    }

    .snipcart__font--subtitle {
        padding-bottom: 15px;
    }

    .snipcart__font--slim,
    .snipcart__font--xlarge {
        line-height: 1.3;
    }

    .snipcart-item-line__header {
        .snipcart-item-line__title {
            font-size: 14px;
            width: 100%;
            @media (min-width: 1024px) {
                font-size: 16px;
            }
        }
        img {
            display: none;
        }
    }

    .snipcart-cart-header {
        display: flex;
        justify-content: center;
        max-width: 1440px;

        button {
            position: absolute;
            top: 16px;
            left: 16px;

            @media (min-width: 768px) {
                top: 13px;
                left: 0px;
            }

            @media (min-width: 1024px) {
                top: 29px;
                left: 0px;
            }

            display: flex;
            align-items: center;
            cursor: pointer;

            .snipcart-modal__close-icon {
                font-size: ${({ theme }) => theme.spacing(4)};
            }
        }

        .snipcart-cart-header__title {
            display: none;
            @media (min-width: 768px) {
                display: block;
            }
        }
    }

    .snipcart-item-line__container,
    .snipcart-form,
    .snipcart-payment,
    .snipcart__box--gray {
        box-shadow: 2px 2px 6px #cdcdcd;
        background-color: white;
    }

    .snipcart__box--badge {
        display: none;
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

    .snipcart-cart__secondary-header {
        padding-right: 64px;
        h1 {
            display: flex;
            align-items: center;
            visibility: hidden;
            :after {
                display: block;
                position: absolute;
                visibility: visible;
                content: 'Edit Cart';
            }
        }
        button {
            cursor: pointer;
            svg {
                display: none;
            }
            :after {
                content: 'Close';
            }
        }
    }

    .snipcart-item-line--cart-edit {
        border-bottom: none;
    }

    .snipcart-discount-box__button {
        border: none;
        text-align: left;
    }

    .snipcart-discount-box__form {
        border: 1px solid black;
    }

    .snipcart-cart__footer-col {
        .snipcart-cart__featured-payment-methods-container {
            display: none;
        }
    }

    .snipcart-featured-payment-methods__link {
        svg {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }

    .snipcart-layout__col--large {
        margin-left: 16px;
        @media (min-width: 768px) {
            margin-left: 0;
        }
    }

    .snipcart-payment-methods-list-item__button {
        display: flex;
        justify-content: center;
        height: auto;
        .snipcart-payment-methods-list-item__arrow {
            display: none;
        }
    }

    button {
        outline: none;
    }

    hr {
        display: none;
    }
`
