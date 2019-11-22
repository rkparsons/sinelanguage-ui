import React, { ComponentProps } from 'react'

import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

type StateProps = Omit<ComponentProps<typeof View>, 'siteMetadata'>

export default (props: StateProps) => {
    const siteMetadata = useStaticQuery(graphql`
        query SiteMetadata {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} siteMetadata={siteMetadata} />
}
