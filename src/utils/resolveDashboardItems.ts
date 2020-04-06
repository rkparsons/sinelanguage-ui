import { Artist } from '~/types/artist'
import { DashboardItem } from '~/types/dashboardItem'
import { Release } from '~/types/release'

type Props = {
    allContentfulArtist: {
        nodes: Artist[]
    }
    allContentfulRelease: {
        nodes: Release[]
    }
}
export default ({ allContentfulArtist, allContentfulRelease }: Props) => {
    const artists = allContentfulArtist.nodes.map((artist) => flatten(artist, 'artist'))
    const releases = allContentfulRelease.nodes.map((release) => flatten(release, 'release'))

    const dashboardItems = artists.concat(releases)

    dashboardItems.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return dashboardItems
}

const flatten = (dashboardItem: Artist | Release, type: string) => {
    return {
        type,
        ...dashboardItem,
    } as DashboardItem
}
