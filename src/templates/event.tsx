import ContentDetail from '~/components/ContentDetail'
import { Event } from '~/cms/types'
import { EventModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulEvent: Event
    }
}

export default ({ data }: Props) => <ContentDetail model={new EventModel(data.contentfulEvent)} />

export const query = graphql`
    query($uid: String!) {
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
