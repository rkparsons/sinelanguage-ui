import { Handler } from 'aws-lambda'
import { createClient } from 'contentful-management'

// todo: setup env vars for lambdas
const contentfulApi = createClient({
    accessToken: process.env.GATSBY_CTF_MANAGEMENT_TOKEN!,
})

// todo: remove duplication of pricing logic
// todo: strongly type cms return type
function getPrice(fields: any) {
    if (fields.price && fields.price['en-US']) {
        return fields.price['en-US']
    }

    switch (fields.format['en-US']) {
        // todo: use constant import
        case 'MP3':
            return 0.7
        case '24-bit WAV':
            return 1.1
        case '16-bit WAV':
            return 1.1
        default:
            return 0
    }
}

export const handler: Handler = (event, context, callback) => {
    contentfulApi
        .getSpace(process.env.GATSBY_CTF_SPACE_ID!)
        .then((space) => space.getEnvironment(process.env.GATSBY_CTF_ENVIRONMENT!))
        .then((environment) =>
            environment.getEntries({
                content_type: 'product',
            })
        )
        .then((entries) =>
            callback(null, {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    entries.items.map((product) => ({
                        id: product.fields.title['en-US'],
                        price: getPrice(product.fields),
                        url: process.env.GATSBY_API_PRODUCTS_URL!,
                    }))
                ),
            })
        )
}
