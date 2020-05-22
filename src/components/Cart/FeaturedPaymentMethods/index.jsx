import React from 'react'

// todo: replace with PCI compliant notice or similar
export default () => (
    <featured-payment-methods>
        <div className="snipcart-featured-payment-methods">
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
