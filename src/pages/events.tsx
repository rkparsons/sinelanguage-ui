import ContentList from '~/components/ContentList'
import { Event } from '~/cms/types'
import Head from '~/components/Head'
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
    <>
        <Head title="Events" />
        <ContentList title="EVENTS" items={data.allContentfulEvent.nodes} />
    </>
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
