const FeaturedPaymentMethods = require('./FeaturedPaymentMethods')
const LineItem = require('./LineItem')

import React, { useEffect } from 'react'

import Billing from './Billing'
import SnipcartCheckbox from './SnipcartCheckbox'
import SnipcartInput from './SnipcartInput'
import SnipcartLabel from './SnipcartLabel'

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
            <Billing section="top">
                <fieldset className="snipcart-form__set">
                    <div className="snipcart-form__field">
                        <SnipcartLabel
                            className="snipcart__font--tiny"
                            forInput="phone"
                            text="Phone number"
                        />
                        <SnipcartInput name="phone" />
                    </div>
                </fieldset>
            </Billing>
            <Billing section="bottom">
                <fieldset className="snipcart-form__set">
                    <div className="snipcart-form__field-checkbox">
                        <SnipcartCheckbox name="subscribeToNewsletter" />
                        <SnipcartLabel
                            className="snipcart__font--tiny snipcart-form__label--checkbox"
                            forInput="subscribeToNewsletter"
                            text="Subscribe to newsletter"
                        />
                    </div>
                </fieldset>
            </Billing>
        </div>
    )
}
