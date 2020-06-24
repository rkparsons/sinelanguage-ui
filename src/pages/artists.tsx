import { Artist } from '~/cms/types'
import ContentList from '~/components/ContentList'
import Head from '~/components/Head'
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

    return (
        <>
            <Head title="Artists" />
            <ContentList title="ARTISTS" items={items} isLargePaddingOnMobile={false} />
        </>
    )
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
