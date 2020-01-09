import { Helmet } from 'react-helmet'
import React from 'react'
import { SiteMetadataQuery } from '~/types/graphql'

interface ViewProps {
    title: string
    description?: string
    image?: string
    url?: string
    siteMetadata: SiteMetadataQuery
}

export default ({ title, description, image, url, siteMetadata }: ViewProps) => {
    const seoTitle = `${title} | ${siteMetadata.prismicSiteMetadata?.data?.title?.text}`
    const seoDescription =
        description || `${siteMetadata.prismicSiteMetadata?.data?.description?.text}`

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={image} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={image} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    )
}
