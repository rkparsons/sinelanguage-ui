import CartHeader from '../Elements/CartHeader'
import CloseCartAction from '../Elements/CloseCartAction'
import Media from '../Elements/Media'
import React from 'react'

export default () => (
    <CartHeader>
        <header className="snipcart-cart-header">
            <CloseCartAction className="snipcart-cart-header__close-button snipcart-modal__close">
                <span className="snipcart-modal__close-title snipcart__font--std">
                    {`\u2190 Continue browsing`}
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
