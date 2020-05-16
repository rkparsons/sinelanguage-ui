const FeaturedPaymentMethods = require('./FeaturedPaymentMethods')
const LineItem = require('./LineItem')
// import { snipcartApiKey } from '../../../env-variables'

import React from 'react'

type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

type SnipcartBilling = HTMLProps & {
    section: string
}

type SnipcartLabel = HTMLProps & {
    for: string
}

type SnipcartInput = HTMLProps & {
    name: string
}

type SnipcartCheckbox = HTMLProps & {
    name: string
}

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
