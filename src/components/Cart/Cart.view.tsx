import React, { memo } from 'react'

import Billing from './Billing'
import { Cart } from './Cart.style'
import { Helmet } from 'react-helmet'
import SnipcartCheckbox from './SnipcartCheckbox'
import SnipcartInput from './SnipcartInput'
import SnipcartLabel from './SnipcartLabel'

type ViewProps = {
    version: string
    openCartOnAdd: boolean
}

export default memo(
    ({ version, openCartOnAdd }: ViewProps) => {
        const dependencies = [
            React.createElement('link', {
                key: 'snipcart-style',
                rel: 'stylesheet',
                href: `https://cdn.snipcart.com/themes/v${version}/default/snipcart.css`,
                as: 'style',
            }),
            React.createElement('script', {
                key: 'snipcart-script',
                defer: true,
                rel: 'preload',
                as: 'script',
                src: `https://cdn.snipcart.com/themes/v${version}/default/snipcart.js`,
            }),
        ]

        return (
            <>
                <Helmet>{dependencies}</Helmet>
                <Cart>
                    <div
                        hidden
                        id="snipcart"
                        data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
                        data-config-add-product-behavior={openCartOnAdd === false ? 'none' : null}
                    >
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
                </Cart>
            </>
        )
    },
    () => true
)
