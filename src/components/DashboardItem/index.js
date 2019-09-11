import React from 'react'
import { Link } from 'gatsby'
import { Flipped } from 'react-flip-toolkit'
import styles from './index.module.scss'
import SquareImage from '../SquareImage'
import { graphql } from 'gatsby'

export default ({ fields, title, layout, filter }) => {
    const isVisible = !filter || filter === layout

    return (
        <Flipped flipId={fields.id} stagger opacity translate={false}>
            <Link to={`/${fields.url}`} className={isVisible ? styles.show : styles.hide}>
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
        layout
    }
`
