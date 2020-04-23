import { Artist, Event, Podcast, Release } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: Artist | Event | Podcast | Release
    setSelectedMedia(media: Artist | Event | Podcast | Release): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
