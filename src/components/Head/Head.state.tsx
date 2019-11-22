import React, { ComponentProps } from 'react'

import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default (props: ComponentProps<typeof View>) => {
    const siteMetadata = useStaticQuery(graphql`
        query SiteMetadata {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} siteMetadata={siteMetadata} />
}
