import FeaturedPaymentMethods from '../Elements/FeaturedPaymentMethods'
import { Https } from '@material-ui/icons'
import React from 'react'

// todo: replace with PCI compliant notice or similar
export default () => (
    <FeaturedPaymentMethods>
        <div className="snipcart-featured-payment-methods">
            <h3 className="snipcart__font--secondary snipcart__font--bold  snipcart-featured-payment-methods__title">
                <span className="snipcart-featured-payment-methods__link">
                    <Https /> Secure, PCI compliant payments by Stripe.
                </span>
            </h3>
            <ul className="snipcart-featured-payment-methods__list">
                <li className="snipcart-featured-payment-methods__list-item">
                    <svg
                        viewBox="0 0 174 56"
                        fill="none"
                        className="snipcart__icon--brand snipcart__icon"
                    >
                        <path
                            d="M74.98 55.192H60.965L69.73.982h14.016l-8.766 54.21zM125.793 2.308C123.028 1.21 118.643 0 113.221 0c-13.842 0-23.59 7.381-23.65 17.934-.114 7.786 6.98 12.111 12.285 14.707 5.423 2.653 7.267 4.385 7.267 6.75-.056 3.63-4.382 5.305-8.418 5.305-5.596 0-8.595-.863-13.151-2.884l-1.846-.866-1.962 12.169c3.288 1.498 9.345 2.827 15.633 2.885 14.707 0 24.282-7.267 24.396-18.513.056-6.171-3.69-10.9-11.766-14.764-4.902-2.48-7.905-4.152-7.905-6.69.058-2.307 2.54-4.67 8.074-4.67 4.557-.116 7.905.98 10.441 2.075l1.268.576 1.906-11.706zM144.423 35.988c1.154-3.114 5.596-15.168 5.596-15.168-.058.116 1.152-3.171 1.844-5.19l.98 4.672s2.654 12.976 3.23 15.686h-11.65zM161.725.983h-10.842c-3.344 0-5.884.98-7.326 4.498l-20.821 49.71h14.708l2.942-8.131h17.996a2177.47 2177.47 0 0 1 1.673 8.132h12.978L161.725.982zM49.257.983L35.529 37.949l-1.5-7.497C31.491 21.8 23.532 12.401 14.65 7.729l12.574 47.406h14.822L64.078.983H49.256z"
                            fill="#00579F"
                        ></path>
                        <path
                            d="M22.782.983H.232L0 2.078C17.592 6.577 29.242 17.42 34.03 30.454L29.126 5.54c-.807-3.463-3.288-4.443-6.345-4.557z"
                            fill="#FAA61A"
                        ></path>
                    </svg>
                </li>
                <li className="snipcart-featured-payment-methods__list-item">
                    <svg
                        viewBox="0 0 104 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="snipcart__icon--brand snipcart__icon"
                    >
                        <path d="M67.173 6.842H36.37v50.31h30.803V6.842z" fill="#FF5F00"></path>
                        <path
                            d="M39.543 32.002a31.939 31.939 0 0 1 12.22-25.15 31.994 31.994 0 1 0 0 50.31 31.939 31.939 0 0 1-12.22-25.16z"
                            fill="#EB001B"
                        ></path>
                        <path
                            d="M103.53 32.002a31.991 31.991 0 0 1-35.41 31.81 31.994 31.994 0 0 1-16.357-6.66 31.992 31.992 0 0 0 0-50.31 31.994 31.994 0 0 1 51.767 25.151v.009z"
                            fill="#F79E1B"
                        ></path>
                    </svg>
                </li>
            </ul>
        </div>
    </FeaturedPaymentMethods>
)
