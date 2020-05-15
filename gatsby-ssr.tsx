// const { ssrAPI } = require('./gatsby/ssrApi')

// module.exports = ssrAPI

import Cart from './src/components/Cart'
import React from 'react'
import { RenderBodyArgs } from './gatsby/types/ssr'

export type GatsbySsrContext = {
    setBodyComponents: (components: React.ReactElement[]) => undefined
}

export const onRenderBody = ({ setPostBodyComponents }: RenderBodyArgs) => {
    const components = [
        <Cart />,
        <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script>,
    ]

    setPostBodyComponents(components)
}
