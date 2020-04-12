import Head from '~/components/Head'
import Loadable from '@loadable/component'
import React from 'react'
import { Release } from '~/cms/types'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'

const EmbeddedPlayer = Loadable(() => import('~/components/EmbeddedPlayer'))

type Props = {
    data: {
        contentfulRelease: Release
    }
}

export default ({ data }: Props) => {
    const {
        uid,
        title,
        artist,
        format,
        description,
        image,
        date,
        embeddedPlayer,
    } = data.contentfulRelease

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
            <Typography>{artist.title}</Typography>
            <Typography>{format}</Typography>
            <EmbeddedPlayer embeddedPlayer={embeddedPlayer.embeddedPlayer} />
            <Typography>
                [{uid}] {date}
            </Typography>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
        }
    }
`
