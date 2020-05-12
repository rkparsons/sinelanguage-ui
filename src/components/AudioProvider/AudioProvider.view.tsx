import { Artist, Podcast, Release, Track } from '~/cms/types'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

import AudioContext from '~/contexts/audioContext'
import { ContentType } from '~/constants/contentType'
import { FluidObject } from 'gatsby-image'
import useAudioData from '~/hooks/useAudioData'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    // todo: move client id to env vars
    const clientId = 'c5a171200f3a0a73a523bba14a1e0a29'
    const audioRef = useRef<HTMLAudioElement>(null)
    const [tracks, setTracks] = useState<Track[]>([])
    const [trackIndex, setTrackIndex] = useState(0)
    const [artwork, setArtwork] = useState<FluidObject>()
    const [artistTitle, setArtistTitle] = useState('')
    const [timeMs, setTimeMs] = useState(0)
    const [durationMs, setDurationMs] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioData = useAudioData(audioRef)

    // todo: put audio analyser init here and remove audioRef from context

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onended = next
        }
    }, [audioRef.current])

    useEffect(() => {
        if (trackIndex < tracks.length) {
            setTimeMs(0)
            setDurationMs(tracks[trackIndex].metadata.duration)
        }
    }, [tracks, trackIndex])

    // todo: only run this when tracks selected
    useRecursiveTimeout(() => {
        if (audioRef.current) {
            setTimeMs(audioRef.current.currentTime * 1000)
        }
    }, 100)

    // todo: separate out logic for audio ref from selectedmedia
    function isPrevious() {
        return trackIndex > 0
    }

    function isNext() {
        return trackIndex < tracks.length - 1
    }

    function previous() {
        if (isPrevious()) {
            setTrackIndex(trackIndex - 1)
        }
    }

    function next() {
        if (isNext()) {
            setTrackIndex(trackIndex + 1)
            loadSrc(tracks[trackIndex + 1].metadata.streamUrl)
            playMedia()
        }
    }

    function getTracks(content: Artist | Podcast | Release) {
        return content.__typename === ContentType.PODCAST
            ? [(content as Podcast).track]
            : content.__typename === ContentType.RELEASE
            ? (content as Release).tracks
            : []
    }

    function loadMedia(content: Artist | Podcast | Release, newTrackIndex: number = 0) {
        const newTracks = getTracks(content)
        setArtwork(content.image.fluid)
        setArtistTitle('ADD ARTIST')
        setTracks(newTracks)
        setTrackIndex(newTrackIndex)
        loadSrc(newTracks[newTrackIndex].metadata.streamUrl)
        playMedia()
    }

    function loadSrc(src: string) {
        if (audioRef.current) {
            audioRef.current.src = `${src}?client_id=${clientId}`
        }
    }

    function stopMedia() {
        setTracks([])
        setTrackIndex(0)
        setArtwork(undefined)

        if (audioRef.current) {
            audioRef.current.pause()
        }
    }

    function playMedia() {
        setIsPlaying(true)
        audioRef.current?.play()
    }

    function pauseMedia() {
        setIsPlaying(false)
        audioRef.current?.pause()
    }

    function skipMedia(newTimeMs: number) {
        if (audioRef.current) {
            audioRef.current.currentTime = newTimeMs / 1000
        }

        setTimeMs(newTimeMs)
        setIsPlaying(true)
    }

    function setVolume(volume: number) {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    function isHTMLAudioReady() {
        return audioRef.current !== undefined
    }

    function isWebAudioAPIAvailable() {
        return window.AudioContext !== undefined
    }

    return (
        <AudioContext.Provider
            value={{
                isPlaying,
                track: tracks[trackIndex],
                artwork,
                artistTitle,
                timeMs,
                durationMs,
                audioData,
                isHTMLAudioReady,
                isWebAudioAPIAvailable,
                isPrevious,
                isNext,
                previous,
                next,
                loadMedia,
                stopMedia,
                playMedia,
                pauseMedia,
                skipMedia,
                setVolume,
            }}
        >
            <audio ref={audioRef} preload="auto" crossOrigin="anonymous" />
            {children}
        </AudioContext.Provider>
    )
}
