import { Helmet } from 'react-helmet'
import React from 'react'

export default ({ title, description, image, url, siteMetadata }) => {
    const titleCombined = `${title} | ${siteMetadata.title}`

    return (
        <Helmet>
            <title>{titleCombined}</title>
            <meta name="title" content={titleCombined} />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={image} />
            <meta property="og:title" content={titleCombined} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={titleCombined} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    )
}
