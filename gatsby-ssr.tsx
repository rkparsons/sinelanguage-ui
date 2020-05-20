// // const { ssrAPI } = require('./gatsby/ssrApi')

// // module.exports = ssrAPI

// import Cart from './src/components/Cart'
// import React from 'react'
// import { RenderBodyArgs } from 'gatsby'

// export type GatsbySsrContext = {
//     setBodyComponents: (components: React.ReactElement[]) => undefined
// }

// export const onRenderBody = ({ setPostBodyComponents }: RenderBodyArgs) => {
//     const version = '3.0.13'
//     const components = [
//         <Cart />,
//         <link
//             rel="stylesheet"
//             href={`https://cdn.snipcart.com/themes/v${version}/default/snipcart.css`}
//         />,
//         <script
//             src={`https://cdn.snipcart.com/themes/v${version}/default/snipcart.js`}
//             defer
//             ref="preload"
//         ></script>,
//     ]

//     setPostBodyComponents(components)
// }
