import { PrismicArtistConnection, PrismicReleaseConnection } from '~/types/graphql'

import Container from './Dashboard.style'
import DashboardItem from '~/components/DashboardItem'
import Head from '~/components/Head'
import React from 'react'

type ViewProps = {
    allPrismicArtist: PrismicArtistConnection
    allPrismicRelease: PrismicReleaseConnection
    filter?: string
}

export default ({ allPrismicArtist, allPrismicRelease, filter }: ViewProps) => {
    const title = filter ? `${filter}s` : 'News'
    const artists = allPrismicArtist.edges.map(x => ({
        type: 'Artist',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const releases = allPrismicRelease.edges.map(x => ({
        type: 'Release',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const dashboardItems = artists.concat(releases)

    dashboardItems.sort(function(a, b) {
        return new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
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
