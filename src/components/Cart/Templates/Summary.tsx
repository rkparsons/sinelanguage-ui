import CartSummary from '../Elements/CartSummary'
import CartSummaryFees from '../Elements/CartSummaryFees'
import CartSummaryItemsList from '../Elements/CartSummaryItemsList'
import FeaturedPaymentMethods from './FeaturedPaymentMethods'
import LoadingOverlay from '../Elements/LoadingOverlay'
import OpenSideCartAction from '../Elements/OpenSideCartAction'
import React from 'react'

export default () => (
    <CartSummary>
        <div className="snipcart-cart-summary">
            <section className="snipcart-cart-summary__content">
                <div className="snipcart-cart-summary__actions snipcart__box--header">
                    <h1 className="snipcart-cart-summary__title snipcart__font--subtitle">{`{{ $localize('cart.summary') }}`}</h1>
                    <OpenSideCartAction className="snipcart__actions--link">{`{{ $localize('actions.edit') }}`}</OpenSideCartAction>
                </div>
                <CartSummaryItemsList className="snipcart-cart-summary__items" />

                <hr className="snipcart-cart-summary__separator" />

                <LoadingOverlay>
                    <div className="snipcart-cart-summary__totals">
                        <CartSummaryFees />
                    </div>
                </LoadingOverlay>
            </section>

            <section className="snipcart-cart-summary__content">
                <div>
                    <h1 className="snipcart-cart-summary__title snipcart__font--subtitle">
                        Digital downloads
                    </h1>
                    <p className="snipcart__font--slim">
                        For digital releases, you will receive a link to your download via email as
                        soon as the payment is processed.
                    </p>
                </div>
            </section>

            <footer className="snipcart-cart-summary__footer">
                <FeaturedPaymentMethods />
            </footer>
        </div>
    </CartSummary>
)
