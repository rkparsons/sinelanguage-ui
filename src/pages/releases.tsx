import { Release, Video } from '~/cms/types'

import ContentList from '~/components/ContentList'
import React from 'react'
import { graphql } from 'gatsby'
import { sort } from '~/utils/content'

type ViewProps = {
    data: {
        allContentfulRelease: {
            nodes: Release[]
        }
        allContentfulVideo: {
            nodes: Video[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const items = sort([...data.allContentfulRelease.nodes, ...data.allContentfulVideo.nodes])

    return <ContentList title="RELEASES" items={items} />
}

export const query = graphql`
    {
        allContentfulRelease {
            nodes {
                ...releaseFragment
            }
        }
        allContentfulVideo {
            nodes {
                ...videoFragment
            }
        }
    }
`
