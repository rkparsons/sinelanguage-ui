// type ShippingRequest = {
//     content: {
//         shippingAddressCountry: string,
//         items: [
//             {
//                 id: string,
//                 totalPrice: number,
//                 totalWeight: number,
//             }
//         ],
//         subtotal: number,
//         totalWeight: number,
//     },
// }

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

function returnRate(callback, cost, description) {
    let rates =
        cost && description
            ? [
                  {
                      cost,
                      description,
                  },
              ]
            : []

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            rates,
        }),
    })
}

function isInEurope(countryCode) {
    return euCountryCodes.includes(countryCode)
}

export function handler(event, context, callback) {
    try {
        let countryCode = JSON.parse(event.body).content.shippingAddressCountry

        if (countryCode === 'UK') {
            returnRate([
                {
                    cost: 3,
                    description: 'UK Shipping (3-5 days)',
                },
            ])
        } else if (isInEurope(countryCode)) {
            returnRates([
                {
                    cost: 5.5,
                    description: 'EU Shipping (3-5 days)',
                },
            ])
        } else {
            returnRates([
                {
                    cost: 9,
                    description: 'Worldwide Shipping (5-7 days)',
                },
            ])
        }
    } catch {
        returnRate(callback)
    }
}
