import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/types/artist'
import Head from '~/components/Head'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist

    console.log(image)

    return (
        <>
            <Head title={title} description={description} image={image.fluid.src} />
            <Grid container>
                <Typography variant="h3">{title}</Typography>
                <SquareImage title={title} image={image} />
            </Grid>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`
