import CartHeader from '../Elements/CartHeader'
import CloseCartAction from '../Elements/CloseCartAction'
import Icon from '../Elements/Icon'
import Media from '../Elements/Media'
import React from 'react'
import { Unicode } from '~/constants/unicode'

export default () => (
    <CartHeader>
        <header className="snipcart-cart-header">
            <CloseCartAction className="snipcart-cart-header__close-button snipcart-modal__close">
                <span className="snipcart-modal__close-icon">{Unicode.LEFT}</span>
                <span className="snipcart-modal__close-title snipcart__font--std">
                    {`Continue browsing`}
                </span>
            </CloseCartAction>

            <Media name="tablet, large">
                <h3 className="snipcart-cart-header__title snipcart__font--black snipcart__font--secondary">
                    Your Items
                </h3>
            </Media>

            <div></div>
        </header>
    </CartHeader>
)
