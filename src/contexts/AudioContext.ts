import { Podcast } from '~/cms/types'
import { createContext } from 'react'

type Audio = {
    audio: Podcast | undefined
    setAudio(audio: Podcast): void
}

export const AudioContext = createContext<Audio>({
    audio: undefined,
    setAudio: () => {},
})
