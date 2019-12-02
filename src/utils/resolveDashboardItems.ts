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

export default ({
    allPrismicArtist,
    allPrismicRelease,
    allPrismicPodcast,
    allPrismicEvent,
}: {
    allPrismicArtist: PrismicArtistConnection
    allPrismicRelease: PrismicReleaseConnection
    allPrismicPodcast: PrismicPodcastConnection
    allPrismicEvent: PrismicEventConnection
}) => {
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

    return dashboardItems
}

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
