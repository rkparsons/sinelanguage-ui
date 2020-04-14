import { Artist, Podcast, Release } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: Podcast | Release | Artist
    setSelectedMedia(media: Podcast | Release | Artist): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
