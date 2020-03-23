import { Artist } from '~/types/artist'
import Container from './Dashboard.style'
import DashboardItem from '~/components/DashboardItem'
import Head from '~/components/Head'
import React from 'react'
import { WindowLocation } from '@reach/router'
import resolveDashboardItems from '~/utils/resolveDashboardItems'

type ViewProps = {
    data: {
        allContentfulArtist: {
            nodes: Artist[]
        }
    }
    location: WindowLocation
}

export default ({ data, location }: ViewProps) => {
    const filter = location.pathname.slice(1)
    const title = filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'News'
    const dashboardItems = resolveDashboardItems(data)

    return (
        <>
            <Head title={title} />
            <Container>
                {dashboardItems.map((dashboardItem, index) => (
                    <DashboardItem key={index} dashboardItem={dashboardItem} filter={filter} />
                ))}
            </Container>
        </>
    )
}
