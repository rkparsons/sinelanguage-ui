import React, { memo, useEffect } from 'react'

import Billing from './Billing'
import { Cart } from './Cart.style'
import { Helmet } from 'react-helmet'
import SnipcartCheckbox from './SnipcartCheckbox'
import SnipcartInput from './SnipcartInput'
import SnipcartLabel from './SnipcartLabel'

export default memo(
    () => {
        console.log('rendering cart')
        const stylesUrl = 'https://cdn.snipcart.com/themes/v3.0.13/default/snipcart.css'
        const scriptUrl = 'https://cdn.snipcart.com/themes/v3.0.13/default/snipcart.js'

        function configureSnipcart() {
            const { Snipcart } = window as any

            if (!Snipcart) {
                return
            }

            Snipcart.api.session.setLanguage('en', {
                actions: {
                    continue_shopping: 'Go back to store',
                },
            })
        }

        useEffect(() => {
            configureSnipcart()

            document.addEventListener('snipcart.ready', () => {
                configureSnipcart()
            })
        }, [])

        return (
            <>
                <Helmet>
                    <link rel="stylesheet" href={stylesUrl} />
                    <script src={scriptUrl}></script>,
                </Helmet>
                <Cart>
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
                </Cart>
            </>
        )
    },
    () => true
)
