import {
    contentfulAccessToken,
    contentfulEnvironment,
    contentfulSpaceId,
    googleAnalyticsId,
    mailchimpUrl,
} from '../../env-variables'

import { Plugins } from '../types/plugins'

export const plugins: Plugins = [
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: googleAnalyticsId,
            head: true,
            anonymize: true,
            respectDNT: true,
        },
    },
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
            environment: contentfulEnvironment,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
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
            endpoint: mailchimpUrl,
        },
    },
]
