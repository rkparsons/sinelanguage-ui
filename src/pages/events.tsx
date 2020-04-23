import ContentList from '~/components/ContentList'
import { Event } from '~/cms/types'
import { EventModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulEvent: {
            nodes: Event[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const releases = data.allContentfulEvent.nodes.map((x) => new EventModel(x))

    releases.sort((a, b) => b.getDateMs() - a.getDateMs())

    return <ContentList models={releases} />
}

export const query = graphql`
    {
        allContentfulEvent {
            nodes {
                ...eventFragment
            }
        }
    }
`
