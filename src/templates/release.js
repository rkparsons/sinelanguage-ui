import Head from '../components/Head'
import React from 'react'
import SquareImage from '../components/SquareImage'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const { name, image } = data.prismicRelease.data

    return (
        <div>
            <Head title={name} />
            <h1>{name}</h1>
            <SquareImage image={image} />
        </div>
    )
}

export const query = graphql`
    query Release($uid: String!) {
        prismicRelease(uid: { eq: $uid }) {
            ...releaseFragment
        }
    }
`

export const releaseFragment = graphql`
    fragment releaseFragment on PrismicRelease {
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
