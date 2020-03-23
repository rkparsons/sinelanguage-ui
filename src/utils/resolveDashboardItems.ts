import { Artist } from '~/types/artist'
import { DashboardItem } from '~/types/dashboardItem'

export default ({
    allContentfulArtist,
}: {
    allContentfulArtist: {
        nodes: Artist[]
    }
}) => {
    const artists = allContentfulArtist.nodes.map(artist => flatten(artist, 'artist'))

    const dashboardItems = artists

    dashboardItems.sort(function(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return dashboardItems
}

const flatten = (dashboardItem: Artist, type: string) => {
    return {
        type,
        ...dashboardItem,
    } as DashboardItem
}
