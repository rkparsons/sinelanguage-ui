const Dotenv = require('dotenv-webpack')

const environmentName = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${environmentName}`)

// @see https://github.com/netlify/netlify-lambda#webpack-configuration
module.exports = {
    plugins: [
        new Dotenv({
            path: `.env.${environmentName}`,
            safe: true,
        }),
    ],
}
