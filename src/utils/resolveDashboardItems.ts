import { Artist, Podcast, Release } from '~/cms/types'

type Props = {
    allContentfulArtist: {
        nodes: Artist[]
    }
    allContentfulRelease: {
        nodes: Release[]
    }
    allContentfulPodcast: {
        nodes: Podcast[]
    }
}
export default ({ allContentfulArtist, allContentfulRelease, allContentfulPodcast }: Props) => {
    const dashboardItems = ([] as (Artist | Release | Podcast)[])
        .concat(allContentfulArtist.nodes)
        .concat(allContentfulRelease.nodes)
        .concat(allContentfulPodcast.nodes)

    dashboardItems.sort(function(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return dashboardItems
}
