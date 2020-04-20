import { Artist } from '~/cms/types'
import { ArtistModel } from '~/cms/models'
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

export default ({ data }: ViewProps) => {
    const artists = data.allContentfulArtist.nodes.map((x) => new ArtistModel(x))

    artists.sort((a, b) => a.content.title.localeCompare(b.content.title))

    return <ContentList models={artists} />
}

export const query = graphql`
    {
        allContentfulArtist {
            nodes {
                ...artistFragment
            }
        }
    }
`
