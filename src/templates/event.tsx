import { Event } from '~/cms/types'
import Head from '~/components/Head'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulEvent: Event
    }
}

export default ({ data }: Props) => {
    const { title, description, image, video, date } = data.contentfulEvent

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
            <Typography>{date}</Typography>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
