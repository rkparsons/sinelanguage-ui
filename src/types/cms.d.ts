import { Artist, Event, Podcast, Release, Video } from '~/cms/types'

export type ContentItem = Artist | Event | Podcast | Release | Video

export type SelectedMedia = {
    content: Artist | Podcast | Release
    trackIndex: number
}
