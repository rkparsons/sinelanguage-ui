import { Artist, Podcast, Release, Track } from '~/cms/types'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { isMobile, isSafari } from 'react-device-detect'

import AudioContext from '~/contexts/audioContext'
import { ContentType } from '~/constants/contentType'
import { FluidObject } from 'gatsby-image'
import useAudioAnalyser from '~/hooks/useAudioAnalyser'

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
    const [durationMs, setDurationMs] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const isAnalysisAvailable = !isMobile && !isSafari
    const getAudioData = useAudioAnalyser(audioRef, isAnalysisAvailable)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onended = next
        }
    }, [audioRef.current, trackIndex])

    useEffect(() => {
        if (trackIndex < tracks.length) {
            setDurationMs(tracks[trackIndex].metadata.duration)
        }
    }, [tracks, trackIndex])

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
            loadSrc(tracks[trackIndex - 1].metadata.streamUrl)
            playMedia()
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
        return content.__typename === ContentType.ARTIST
            ? []
            : content.__typename === ContentType.PODCAST
            ? [(content as Podcast).track]
            : content.__typename === ContentType.RELEASE
            ? (content as Release).tracks
            : []
    }

    function getArtistTitle(content: Artist | Podcast | Release) {
        return content.__typename === ContentType.ARTIST
            ? (content as Artist).title
            : content.__typename === ContentType.PODCAST
            ? (content as Podcast).title
            : content.__typename === ContentType.RELEASE
            ? (content as Release).artist.title
            : ''
    }

    function loadMedia(content: Artist | Podcast | Release, newTrackIndex: number = 0) {
        const newTracks = getTracks(content)
        setArtwork(content.image.fluid)
        setArtistTitle(getArtistTitle(content))
        setTracks(newTracks)
        setTrackIndex(newTrackIndex)
        loadSrc(newTracks[newTrackIndex].metadata.streamUrl)
        playMedia()
    }

    function loadSrc(src: string) {
        if (audioRef.current) {
            audioRef.current.src = `${src}?client_id=${clientId}`
            audioRef.current.load()
        }
    }

    function stopMedia() {
        setTracks([])
        setTrackIndex(0)
        setArtwork(undefined)
        setIsPlaying(false)

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

        setIsPlaying(true)
    }

    function setVolume(volume: number) {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    function getTimeMs() {
        return audioRef.current ? audioRef.current.currentTime * 1000 : 0
    }

    return (
        <AudioContext.Provider
            value={{
                isPlaying,
                track: tracks[trackIndex],
                artwork,
                artistTitle,
                durationMs,
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
                getTimeMs,
                getAudioData,
            }}
        >
            <audio ref={audioRef} preload="auto" crossOrigin="anonymous" />
            {children}
        </AudioContext.Provider>
    )
}
