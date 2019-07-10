const proxy = require('http-proxy-middleware')

let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
    developMiddleware: app => {
        app.use(
            '/.netlify/functions/',
            proxy({
                target: 'http://localhost:9000',
                pathRewrite: {
                    '/.netlify/functions/': '',
                },
            })
        )
    },
    siteMetadata: {
        title: 'Sine Language Records',
        author: 'Richard Parsons',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`],
            },
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: `@import "src/styles/base/_settings.scss";`,
                includePaths: [`src/components`],
            },
        },
    ],
}
