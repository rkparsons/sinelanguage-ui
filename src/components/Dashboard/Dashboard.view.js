import Container from './Dashboard.style.js'
import DashboardItem from '../DashboardItem'
import Head from '../Head'
import React from 'react'

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
        <>
            <Head title={title} />
            <Container>
                {dashboardItems.map((item, i) => (
                    <DashboardItem key={i} {...item} filter={filter} />
                ))}
            </Container>
        </>
    )
}
