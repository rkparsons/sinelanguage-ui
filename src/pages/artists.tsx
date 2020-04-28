import { Artist } from '~/cms/types'
import { ArtistModel } from '~/models'
import ContentList from '~/components/ContentList'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulArtist: {
            nodes: Artist[]
        }
    }
}

export default ({ data }: ViewProps) => (
    <ContentList title="ARTISTS" items={data.allContentfulArtist.nodes} />
)

export const query = graphql`
    {
        allContentfulArtist {
            nodes {
                ...artistFragment
            }
        }
    }
`
