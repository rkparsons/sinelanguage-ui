import { Artist, Event, Podcast, Release, Track, Video } from '~/cms/types'

import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: Artist | Event | Podcast | Release | Track | Video
    setSelectedMedia(media: Artist | Event | Podcast | Release | Track | Video): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
