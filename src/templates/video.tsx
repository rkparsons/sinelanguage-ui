import { Artist, Release, Video } from '~/cms/types'
import { ReleaseModel, VideoModel } from '~/models'

import { Format } from '~/constants/format'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const video = new VideoModel(data.contentfulVideo)

    return video.getDetailComponent()
}

export const query = graphql`
    query($uid: String!) {
        contentfulVideo(uid: { eq: $uid }) {
            ...videoFragment
            artist {
                release {
                    ...releaseFragment
                }
                video {
                    ...videoFragment
                }
            }
        }
    }
`
