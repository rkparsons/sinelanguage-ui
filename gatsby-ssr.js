// const { ssrAPI } = require('./gatsby/ssrApi')

// module.exports = ssrAPI

import Cart from './src/components/cart'
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    const components = [
        <div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY}>
            <Cart />
        </div>,
        <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script>,
    ]

    setPostBodyComponents(components)
}
