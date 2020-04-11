import { createContext } from 'react'

type Audio = {
    trackId: number | undefined
}

const AudioContext = createContext<Audio>({
    trackId: undefined,
})

export const AudioProvider = AudioContext.Provider
export const AudioConsumer = AudioContext.Consumer

export default AudioContext
