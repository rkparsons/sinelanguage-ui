import { Artist } from '~/types/artist'
import Head from '~/components/Head'
import React from 'react'
import RichText from '~/components/RichText'
import SocialLink from '~/components/SocialLink'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist
    }
}

export default ({ data }: Props) => {
    const { title, description, image, bio, socials } = data.contentfulArtist

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
            <RichText json={bio.json} />
            <Typography variant="h3">
                {socials.map((url) => (
                    <SocialLink url={url} />
                ))}
            </Typography>
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
