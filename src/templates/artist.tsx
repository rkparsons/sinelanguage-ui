import { Artist, Release } from '~/cms/types'

import { ArtistModel } from '~/models'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release: Release[] }
    }
}

export default ({ data }: Props) => {
    const artist = new ArtistModel(data.contentfulArtist)

    return artist.getDetailComponent()
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
            release {
                ...releaseFragment
            }
        }
    }
`
