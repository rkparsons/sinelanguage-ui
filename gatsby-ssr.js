// const { ssrAPI } = require('./gatsby/ssrApi')

// module.exports = ssrAPI

import Cart from './src/components/Cart'
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    const components = [
        <Cart />,
        <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script>,
    ]

    setPostBodyComponents(components)
}
