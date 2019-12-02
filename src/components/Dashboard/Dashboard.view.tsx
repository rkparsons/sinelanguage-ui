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
import resolveDashboardItems from '~/utils/resolveDashboardItems'

type ViewProps = {
    data: {
        allPrismicArtist: PrismicArtistConnection
        allPrismicRelease: PrismicReleaseConnection
        allPrismicPodcast: PrismicPodcastConnection
        allPrismicEvent: PrismicEventConnection
    }
    location: WindowLocation
}

export default ({ data }: ViewProps) => {
    const filter = location.pathname.slice(1)
    const title = filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'News'
    const dashboardItems = resolveDashboardItems(data)

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
