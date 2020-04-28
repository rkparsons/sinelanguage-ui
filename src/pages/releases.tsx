import { ContentModel, ReleaseModel, VideoModel } from '~/models'
import { Release, Video } from '~/cms/types'

import ContentList from '~/components/ContentList'
import { Format } from '~/constants/format'
import React from 'react'
import { graphql } from 'gatsby'

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
    const releases = data.allContentfulRelease.nodes.map((x) => new ReleaseModel(x))
    const videos = data.allContentfulVideo.nodes.map((x) => new VideoModel(x))
    const models = ([] as ContentModel[]).concat(releases).concat(videos)

    models.sort((a, b) => b.getDateMs() - a.getDateMs())

    return <ContentList models={models} />
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
