import {
    PrismicArtistConnection,
    PrismicArtistEdge,
    PrismicEventConnection,
    PrismicEventEdge,
    PrismicPodcastConnection,
    PrismicPodcastEdge,
    PrismicReleaseConnection,
    PrismicReleaseEdge,
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
    const filter = location.pathname.slice(1)
    const title = filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'News'

    const flatten = (
        x: PrismicArtistEdge | PrismicReleaseEdge | PrismicPodcastEdge | PrismicEventEdge
    ) => {
        return {
            type: x.node.type!,
            uid: x.node.uid!,
            name: x.node.data!.name!,
            image: x.node.data!.image!,
            published_date: x.node.data!.published_date!,
        }
    }

    const artists = allPrismicArtist.edges.map(x => flatten(x))
    const releases = allPrismicRelease.edges.map(x => flatten(x))
    const podcasts = allPrismicPodcast.edges.map(x => flatten(x))
    const events = allPrismicEvent.edges.map(x => flatten(x))

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
