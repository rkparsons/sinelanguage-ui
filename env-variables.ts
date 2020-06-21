import dotenv from 'dotenv-safe'

export const environmentName =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${environmentName}`)

dotenv.config({
    path: `.env.${environmentName}`,
})

export const netlifySiteId = process.env['NETLIFY_SITE_ID']!

export const netlifyAccessToken = process.env['NETLIFY_ACCESS_TOKEN']!

export const auth0Domain = process.env['GATSBY_AUTH0_DOMAIN']!

export const auth0ClientId = process.env['GATSBY_AUTH0_CLIENTID']!

export const auth0Callback = process.env['GATSBY_AUTH0_CALLBACK']!

export const faunaDbServerSecret = process.env['GATSBY_FAUNADB_SERVER_SECRET']!

export const prismicAccessToken = process.env['GATSBY_PRISMIC_ACCESS_TOKEN']!

export const googleAnalyticsId = process.env['GATSBY_GOOGLE_ANALYTICS_ID']!

export const facebookPixelId = process.env['GATSBY_FACEBOOK_PIXEL_ID']!

export const contentfulSpaceId = process.env['GATSBY_CTF_SPACE_ID']!

export const contentfulAccessToken = process.env['GATSBY_CTF_ACCESS_TOKEN']!

export const contentfulManagementToken = process.env['GATSBY_CTF_MANAGEMENT_TOKEN']!

export const contentfulEnvironment = process.env['GATSBY_CTF_ENVIRONMENT']!

export const soundCloudClientID = process.env['SOUNDCLOUD_CLIENT_ID']

export const snipcartApiKey = process.env['GATSBY_SNIPCART_API_KEY']
