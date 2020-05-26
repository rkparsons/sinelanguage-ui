import { Artist, Podcast, Release, Track } from '~/cms/types'

import { FluidObject } from 'gatsby-image'
import { createContext } from 'react'

type AudioContext = {
    isPlaying: boolean
    track: Track | undefined
    artwork: FluidObject | undefined
    artistTitle: string
    durationMs: number
    isWebAudio: boolean
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
    getTimeMs: () => number
    getAudioData: () => number[]
}

export default createContext<AudioContext | undefined>(undefined)
