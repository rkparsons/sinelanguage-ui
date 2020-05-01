import { Artist } from '~/cms/types'
import ContentList from '~/components/ContentList'
import React from 'react'
import { graphql } from 'gatsby'
import { sortByTitle } from '~/utils/content'

type ViewProps = {
    data: {
        allContentfulArtist: {
            nodes: Artist[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const items = sortByTitle([...data.allContentfulArtist.nodes])

    return <ContentList title="ARTISTS" items={items} />
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
