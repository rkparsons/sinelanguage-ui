import FeaturedPaymentMethods from '../Elements/FeaturedPaymentMethods'
import Icon from '../Elements/Icon'
import React from 'react'

// todo: replace with PCI compliant notice or similar
export default () => (
    <FeaturedPaymentMethods>
        <div className="snipcart-featured-payment-methods">
            <ul className="snipcart-featured-payment-methods__list">
                <li className="snipcart-featured-payment-methods__list-item">
                    <Icon name="visa" alt="Visa" className="snipcart__icon--brand" />
                </li>
                <li className="snipcart-featured-payment-methods__list-item">
                    <Icon name="mastercard" alt="Mastercard" className="snipcart__icon--brand" />
                </li>
            </ul>
        </div>
    </FeaturedPaymentMethods>
)
