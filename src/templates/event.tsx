import { Event } from '~/cms/types'
import { EventModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulEvent: Event
    }
}

export default ({ data }: Props) => {
    const event = new EventModel(data.contentfulEvent)

    return event.getDetailComponent()
}

export const query = graphql`
    query($uid: String!) {
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
