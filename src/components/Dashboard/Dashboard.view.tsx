import {
    PrismicArtistConnection,
    PrismicEventConnection,
    PrismicPodcastConnection,
    PrismicReleaseConnection,
} from '~/types/graphql'

import Container from './Dashboard.style'
import DashboardItem from '~/components/DashboardItem'
import Head from '~/components/Head'
import React from 'react'
import { WindowLocation } from '@reach/router'

type ViewProps = {
    allPrismicArtist: PrismicArtistConnection
    allPrismicRelease: PrismicReleaseConnection
    allPrismicPodcast: PrismicPodcastConnection
    allPrismicEvent: PrismicEventConnection
    location: WindowLocation
}

export default ({
    allPrismicArtist,
    allPrismicRelease,
    allPrismicPodcast,
    allPrismicEvent,
}: ViewProps) => {
    const filter = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
    const title = filter || 'News'

    const artists = allPrismicArtist.edges.map(x => ({
        type: 'Artists',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const releases = allPrismicRelease.edges.map(x => ({
        type: 'Releases',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const podcasts = allPrismicPodcast.edges.map(x => ({
        type: 'Podcasts',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const events = allPrismicEvent.edges.map(x => ({
        type: 'Events',
        uid: x.node.uid!,
        name: x.node.data!.name!,
        image: x.node.data!.image!,
        published_date: x.node.data!.published_date!,
    }))
    const dashboardItems = artists
        .concat(releases)
        .concat(podcasts)
        .concat(events)

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
