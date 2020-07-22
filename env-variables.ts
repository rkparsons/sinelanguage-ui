import dotenv from 'dotenv'

export const environmentName =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${environmentName}`)

dotenv.config({
    path: `.env.${environmentName}`,
})
console.log('spaceid', process.env.GATSBY_CTF_SPACE_ID)

export const googleAnalyticsId = process.env['GATSBY_GOOGLE_ANALYTICS_ID']!

export const contentfulSpaceId = process.env['GATSBY_CTF_SPACE_ID']!

export const contentfulAccessToken = process.env['GATSBY_CTF_ACCESS_TOKEN']!

export const contentfulManagementToken = process.env['GATSBY_CTF_MANAGEMENT_TOKEN']!

// todo: use node env instead of additional variable
export const contentfulEnvironment = process.env['GATSBY_CTF_ENVIRONMENT']!

export const snipcartApiKey = process.env['GATSBY_SNIPCART_API_KEY']!

export const mailchimpUrl = process.env['GATSBY_MAILCHIMP_URL']!

export const apiProductsUrl = process.env['GATSBY_API_PRODUCTS_URL']!
