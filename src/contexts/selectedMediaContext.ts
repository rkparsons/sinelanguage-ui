import { Artist, Event, Podcast, Release, Track } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: Artist | Event | Podcast | Release | Track
    setSelectedMedia(media: Artist | Event | Podcast | Release | Track): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
