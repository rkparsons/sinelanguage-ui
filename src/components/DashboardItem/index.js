import React from 'react'
import { Link } from 'gatsby'
import { Flipped } from 'react-flip-toolkit'
import SquareImage from '../SquareImage'
import { graphql } from 'gatsby'

export default ({ fields, title }) => {
    return (
        <Flipped flipId={fields.id}>
            <Link to={`/${fields.url}`}>
                <SquareImage fields={fields} />
                <h4>{title}</h4>
            </Link>
        </Flipped>
    )
}

export const dashboardItemFragment = graphql`
    fragment dashboardItemFragment on DataJson {
        fields {
            id
            url
            responsiveThumbnail {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
        title
    }
`
