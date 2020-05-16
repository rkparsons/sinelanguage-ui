const FeaturedPaymentMethods = require('./FeaturedPaymentMethods')
const LineItem = require('./LineItem')

import React, { useEffect } from 'react'
import { SnipcartBilling, SnipcartCheckbox, SnipcartInput, SnipcartLabel } from '~/types/snipcart'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            billing: SnipcartBilling
            'snipcart-label': SnipcartLabel
            'snipcart-input': SnipcartInput
            'snipcart-checkbox': SnipcartCheckbox
        }
    }
}

export default () => {
    function configureSnipcart() {
        const { Snipcart } = window as any

        Snipcart.api.session.setLanguage('en', {
            actions: {
                continue_shopping: 'Go back to store',
            },
        })
    }

    useEffect(() => {
        document.addEventListener('snipcart.ready', () => {
            configureSnipcart()
        })
    }, [])

    return (
        <div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY}>
            <billing section="top">
                <fieldset className="snipcart-form__set">
                    <div className="snipcart-form__field">
                        <snipcart-label className="snipcart__font--tiny" for="phone">
                            Phone number
                        </snipcart-label>
                        <snipcart-input name="phone"></snipcart-input>
                    </div>
                </fieldset>
            </billing>
            <billing section="bottom">
                <fieldset className="snipcart-form__set">
                    <div className="snipcart-form__field-checkbox">
                        <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
                        <snipcart-label
                            className="snipcart__font--tiny snipcart-form__label--checkbox"
                            for="subscribeToNewsletter"
                        >
                            Subscribe to newsletter
                        </snipcart-label>
                    </div>
                </fieldset>
            </billing>
        </div>
    )
}
