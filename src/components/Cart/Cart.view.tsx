import React, { memo } from 'react'

import Billing from './Templates/Billing'
import { Cart } from './Cart.style'
import { Helmet } from 'react-helmet'

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
                        <Billing />
                    </div>
                </Cart>
            </>
        )
    },
    () => true
)
