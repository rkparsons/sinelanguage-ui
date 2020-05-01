import { SelectedMedia } from '~/types/cms'
import { createContext } from 'react'

type MediaContext = {
    selectedMedia?: SelectedMedia
    setSelectedMedia(media: SelectedMedia): void
}

export const SelectedMediaContext = createContext<MediaContext>({
    selectedMedia: undefined,
    setSelectedMedia: () => {},
})
