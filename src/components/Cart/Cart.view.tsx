import React, { memo, useEffect, useState } from 'react'

import Billing from './Templates/Billing'
import FeaturedPaymentMethods from './Templates/FeaturedPaymentMethods'
import Header from './Templates/Header'
import { Helmet } from 'react-helmet'
import { OverrideCartStyles } from './Cart.style'
import Summary from './Templates/Summary'

type ViewProps = {
    version: string
    openCartOnAdd: boolean
}

export default memo(
    ({ version, openCartOnAdd }: ViewProps) => {
        const [dependencies, setDependencies] = useState<any>()

        useEffect(() => {
            setDependencies([
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
            ])
        }, [])

        return (
            <>
                <Helmet>{dependencies}</Helmet>
                <OverrideCartStyles>
                    <div
                        hidden
                        id="snipcart"
                        data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
                        data-config-add-product-behavior={openCartOnAdd === false ? 'none' : null}
                    >
                        <Header />
                        <Billing />
                        <FeaturedPaymentMethods />
                        <Summary />
                    </div>
                </OverrideCartStyles>
            </>
        )
    },
    () => true
)
