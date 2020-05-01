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
                'https://sinelanguage.us19.list-manage.com/subscribe/post?u=f74d66b167e9f79b3c1aaf8fa&amp;id=de52cdc35f',
        },
    },
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`../../src/components/Layout`),
        },
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            // todo: move to env var
            endpoint:
                'https://sinelanguage.us19.list-manage.com/subscribe/post?u=f74d66b167e9f79b3c1aaf8fa&amp;id=de52cdc35f',
        },
    },
]
