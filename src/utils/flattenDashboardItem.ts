import {
    PrismicArtistEdge,
    PrismicEventEdge,
    PrismicPodcastEdge,
    PrismicReleaseEdge,
} from '~/types/graphql'

export default (
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
