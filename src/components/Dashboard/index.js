import React, { Fragment } from 'react'

import DashboardItem from '../DashboardItem'
import Head from '../head'
import { graphql } from 'gatsby'
import styles from './index.module.scss'

export default ({ allPrismicArtist, allPrismicRelease, filter }) => {
    const title = filter ? `${filter}s` : 'News'
    const artists = allPrismicArtist.edges.map(x => ({
        type: 'Artist',
        uid: x.node.uid,
        ...x.node.data,
    }))
    const releases = allPrismicRelease.edges.map(x => ({
        type: 'Release',
        uid: x.node.uid,
        ...x.node.data,
    }))
    const dashboardItems = artists.concat(releases)

    dashboardItems.sort(function(a, b) {
        return new Date(b.published_date) - new Date(a.published_date)
    })

    return (
        <Fragment>
            <Head title={title} />
            <div className={styles.container}>
                {dashboardItems.map((item, i) => (
                    <DashboardItem key={i} {...item} filter={filter} />
                ))}
            </div>
        </Fragment>
    )
}

export const dashboardFragment = graphql`
    fragment dashboardFragment on Query {
        allPrismicArtist {
            edges {
                node {
                    ...artistFragment
                }
            }
        }
        allPrismicRelease {
            edges {
                node {
                    ...releaseFragment
                }
            }
        }
    }
`
