import { Artist } from '~/cms/types/artist'
import { Release } from '~/cms/types/release'

type Props = {
    allContentfulArtist: {
        nodes: Artist[]
    }
    allContentfulRelease: {
        nodes: Release[]
    }
}
export default ({ allContentfulArtist, allContentfulRelease }: Props) => {
    const dashboardItems = ([] as (Artist | Release)[])
        .concat(allContentfulArtist.nodes)
        .concat(allContentfulRelease.nodes)

    dashboardItems.sort(function(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return dashboardItems
}
