import { Helmet } from 'react-helmet'
import React from 'react'
import { SiteMetadata } from '~/cms/types'

interface ViewProps {
    title: string
    description?: string
    image?: string
    url?: string
    siteMetadata: SiteMetadata
}

export default ({ title, description, image, url, siteMetadata }: ViewProps) => {
    const seoTitle = `${title} | ${siteMetadata.title}`
    const seoDescription = description || `${siteMetadata.description.description}`
    const seoImage = image || `${siteMetadata.image.file.url}`

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />
        </Helmet>
    )
}
