import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { Flipped } from 'react-flip-toolkit'
import Img from 'gatsby-image'

const DashboardItem = ({ fields, title, thumbnail }) => {
    console.log(fields.responsiveThumbnail)
    return (
        <Flipped flipId={fields.id}>
            <Link to={`/${fields.url}`}>
                {fields.responsiveThumbnail.childImageSharp ? (
                    <Img
                        fluid={fields.responsiveThumbnail.childImageSharp.fluid}
                        className={styles.thumbnail}
                    />
                ) : (
                    <img src={thumbnail} alt={title} className={styles.thumbnail} />
                )}
                <h4>{title}</h4>
            </Link>
        </Flipped>
    )
}

export default DashboardItem
