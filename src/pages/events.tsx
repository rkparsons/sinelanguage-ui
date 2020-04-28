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

export default ({ data }: ViewProps) => (
    <ContentList title="EVENTS" items={data.allContentfulEvent.nodes} />
)

export const query = graphql`
    {
        allContentfulEvent {
            nodes {
                ...eventFragment
            }
        }
    }
`
