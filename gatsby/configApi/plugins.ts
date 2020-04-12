import { contentfulAccessToken, contentfulSpaceId } from '../../env-variables'

import { Plugins } from '../types/plugins'

export const plugins: Plugins = [
    {
        resolve: `gatsby-plugin-typescript`,
        options: {
            isTSX: true,
            allExtensions: true,
        },
    },
    `gatsby-plugin-typescript-checker`,
    {
        resolve: `gatsby-plugin-material-ui`,
        options: {
            stylesProvider: {
                injectFirst: true,
            },
        },
    },
    `gatsby-plugin-styled-components`,
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: contentfulSpaceId,
            accessToken: contentfulAccessToken,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint:
                // todo: move to env var and use new link
                'https://sinelanguage.us3.list-manage.com/subscribe/post?u=51b15e2b803b2c4e70392c5f9&amp;id=b5b38d278a',
        },
    },
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`../../src/components/Layout`),
        },
    },
]
