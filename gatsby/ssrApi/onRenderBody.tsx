// import { GatsbySSR, NodePluginArgs, RenderBodyArgs } from 'gatsby'

// import Cart from '../../src/components/Cart'
// import React from 'react'
// import { snipcartApiKey } from '../../env-variables'

// export const onRenderBody: GatsbySSR['onRenderBody'] = ({
//     setPostBodyComponents,
// }: RenderBodyArgs) => {
//     const components = [
//         <div hidden id="snipcart" data-api-key={snipcartApiKey}>
//             <Cart />
//         </div>,
//         <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script>,
//     ]

//     setPostBodyComponents(components)

//     return Promise.resolve()
// }
