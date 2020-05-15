const FeaturedPaymentMethods = require('./FeaturedPaymentMethods')
const LineItem = require('./LineItem')
// import { snipcartApiKey } from '../../../env-variables'

import { Cart } from './Cart.style'
import React from 'react'

export default () => {
    return <div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY} />
}
