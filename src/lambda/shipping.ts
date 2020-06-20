import { Callback, Handler } from 'aws-lambda'

import { ShippingRequest } from '~/types/lambda'

const euCountryCodes = [
    'AD',
    'AL',
    'AT',
    'AX',
    'BA',
    'BE',
    'BG',
    'BY',
    'CH',
    'CZ',
    'DE',
    'DK',
    'EE',
    'ES',
    'FI',
    'FO',
    'FR',
    'GB',
    'GG',
    'GI',
    'GR',
    'HR',
    'HU',
    'IE',
    'IM',
    'IS',
    'IT',
    'JE',
    'LI',
    'LT',
    'LU',
    'LV',
    'MC',
    'MD',
    'ME',
    'MK',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'RS',
    'RU',
    'SE',
    'SI',
    'SJ',
    'SK',
    'SM',
    'UA',
    'VA',
]

function returnNullRate(callback: Callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            rates: [],
        }),
    })
}

function returnRate(callback: Callback, cost: number, description: string) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            rates: [
                {
                    cost,
                    description,
                },
            ],
        }),
    })
}

function isInEurope(countryCode: string) {
    return euCountryCodes.includes(countryCode)
}

export const handler: Handler = (event, context, callback) => {
    if (!event.body) {
        returnNullRate(callback)
    }

    try {
        if (!event.body) {
            throw new Error('No request body.')
        }

        const shippingRequest: ShippingRequest = JSON.parse(event.body)
        const countryCode = shippingRequest.content.shippingAddressCountry

        if (countryCode === 'GB') {
            returnRate(callback, 3, 'UK Shipping (3-5 days)')
        } else if (isInEurope(countryCode)) {
            returnRate(callback, 5.5, 'EU Shipping (3-5 days)')
        } else {
            returnRate(callback, 9, 'Worldwide Shipping (1-2 weeks)')
        }
    } catch {
        returnNullRate(callback)
    }
}
