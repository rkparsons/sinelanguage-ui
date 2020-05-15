import { GatsbySSR, NodePluginArgs, RenderBodyArgs } from 'gatsby'

import React from 'react'
import { snipcartApiKey } from '../../env-variables'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
    setPostBodyComponents,
}: RenderBodyArgs) => {
    console.log('adding components')
    const components = [
        <div hidden id="snipcart" data-api-key={snipcartApiKey}></div>,
        <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script>,
    ]

    setPostBodyComponents(components)

    return Promise.resolve()
}
