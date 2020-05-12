import { Artist, Podcast, Release, Track } from '~/cms/types'
import { RefObject, createContext } from 'react'

import { FluidObject } from 'gatsby-image'

type AudioContext = {
    isPlaying: boolean
    track: Track | undefined
    artwork: FluidObject | undefined
    artistTitle: string
    timeMs: number
    durationMs: number
    audioData: Uint8Array
    isHTMLAudioReady: () => boolean
    isWebAudioAPIAvailable: () => boolean
    isPrevious: () => boolean
    isNext: () => boolean
    previous: () => void
    next: () => void
    loadMedia: (content: Artist | Podcast | Release, trackIndex?: number) => void
    stopMedia: () => void
    playMedia: () => void
    pauseMedia: () => void
    skipMedia: (newTimeMs: number) => void
    setVolume: (volume: number) => void
}

export default createContext<AudioContext | undefined>(undefined)
