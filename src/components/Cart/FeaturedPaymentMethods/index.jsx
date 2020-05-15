import React from 'react'

export default () => (
    <featured-payment-methods>
        <div className="snipcart-featured-payment-methods">
            <h3 className="snipcart__font--secondary snipcart__font--bold snipcart-featured-payment-methods__title">
                Cart Secured by edit...
            </h3>
            <ul className="snipcart-featured-payment-methods__list">
                <li className="snipcart-featured-payment-methods__list-item">
                    <icon name="visa" alt="Visa" className="snipcart__icon--brand"></icon>
                </li>
                <li className="snipcart-featured-payment-methods__list-item">
                    <icon
                        name="mastercard"
                        alt="Mastercard"
                        className="snipcart__icon--brand"
                    ></icon>
                </li>
            </ul>
        </div>
    </featured-payment-methods>
)
