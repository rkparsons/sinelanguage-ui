import Head from '../components/Head'
import React from 'react'
import SquareImage from '../components/SquareImage'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const { name, image } = data.prismicArtist.data

    return (
        <div>
            <Head title={name} />
            <h1>{name}</h1>
            <SquareImage image={image} />
        </div>
    )
}

export const query = graphql`
    query($uid: String!) {
        prismicArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`

export const artistFragment = graphql`
    fragment artistFragment on PrismicArtist {
        uid
        data {
            name
            published_date
            image {
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`
