import { Artist, Podcast, Release } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    trackIndex: number
    setTrackIndex(trackIndex: number): void
    selectedMedia?: Artist | Podcast | Release
    setSelectedMedia(media: Artist | Podcast | Release): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    trackIndex: 0,
    setTrackIndex: () => {},
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
