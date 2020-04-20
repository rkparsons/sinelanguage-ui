import { ReleaseModel, VideoReleaseModel } from '~/cms/models'

import ContentList from '~/components/ContentList'
import { Format } from '~/constants/format'
import React from 'react'
import { Release } from '~/cms/types'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulRelease: {
            nodes: Release[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const releases = data.allContentfulRelease.nodes.map((x) =>
        x.format === Format.VIDEO ? new VideoReleaseModel(x) : new ReleaseModel(x)
    )

    releases.sort((a, b) => b.getDateMs() - a.getDateMs())

    return <ContentList models={releases} />
}

export const query = graphql`
    {
        allContentfulRelease {
            nodes {
                ...releaseFragment
            }
        }
    }
`
