import { Artist, Podcast, Release } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: Artist | Podcast | Release
    setSelectedMedia(media: Artist | Podcast | Release): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
