import React, { ComponentProps } from 'react'

import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default (props: ComponentProps<typeof View>) => {
    const staticQueryResult = useStaticQuery(graphql`
        query {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} staticQueryResult={staticQueryResult} />
}
