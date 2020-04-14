import Head from '~/components/Head'
import { Podcast } from '~/cms/types'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => {
    const { uid, title, description, image, date } = data.contentfulPodcast

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
            <Typography>
                [{uid}] {date}
            </Typography>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
