import { createContext } from 'react'

type Audio = {
    trackId: number | undefined
    setTrackId(trackId: number): void
}

export const AudioContext = createContext<Audio>({
    trackId: undefined,
    setTrackId: () => {},
})
