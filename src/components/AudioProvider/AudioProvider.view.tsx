import { Artist, Podcast, Release, Track } from '~/cms/types'
import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
    const { getAudioData, audioContext } = useAudioAnalyser(audioRef, isAnalysisAvailable)

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

    const loadSrc = useCallback(
        (src: string) => {
            if (audioRef.current) {
                audioRef.current.src = `${src}?client_id=${clientId}`
                audioRef.current.load()
            }
        },
        [audioRef.current]
    )
    const playMedia = useCallback(() => {
        setIsPlaying(true)
        audioRef.current?.play()
    }, [setIsPlaying, audioRef.current])

    // todo: separate out logic for audio ref from selectedmedia
    const isPrevious = useCallback(() => trackIndex > 0, [trackIndex])

    const isNext = useCallback(() => trackIndex < tracks.length - 1, [trackIndex, tracks])

    const previous = useCallback(() => {
        if (isPrevious()) {
            setTrackIndex(trackIndex - 1)
            loadSrc(tracks[trackIndex - 1].metadata.streamUrl)
            playMedia()
        }
    }, [isPrevious, setTrackIndex, trackIndex, loadSrc, tracks, trackIndex, playMedia])

    const next = useCallback(() => {
        if (isNext()) {
            setTrackIndex(trackIndex + 1)
            loadSrc(tracks[trackIndex + 1].metadata.streamUrl)
            playMedia()
        }
    }, [isNext, setTrackIndex, trackIndex, loadSrc, tracks, playMedia])

    const getTracks = useCallback(
        (content: Artist | Podcast | Release) =>
            content.__typename === ContentType.ARTIST
                ? []
                : content.__typename === ContentType.PODCAST
                ? [(content as Podcast).track]
                : content.__typename === ContentType.RELEASE
                ? (content as Release).tracks
                : [],
        []
    )

    const getArtistTitle = useCallback(
        (content: Artist | Podcast | Release) =>
            content.__typename === ContentType.ARTIST
                ? (content as Artist).title
                : content.__typename === ContentType.PODCAST
                ? (content as Podcast).title
                : content.__typename === ContentType.RELEASE
                ? (content as Release).artist.title
                : '',
        []
    )

    // todo: split up methods with so many deps
    const loadMedia = useCallback(
        (content: Artist | Podcast | Release, newTrackIndex: number = 0) => {
            const newTracks = getTracks(content)
            setArtwork(content.image.fluid)
            setArtistTitle(getArtistTitle(content))
            setTracks(newTracks)
            setTrackIndex(newTrackIndex)
            loadSrc(newTracks[newTrackIndex].metadata.streamUrl)
            playMedia()
            audioContext.current?.resume()
        },
        [
            getTracks,
            setArtwork,
            setArtistTitle,
            getArtistTitle,
            setTracks,
            setTrackIndex,
            loadSrc,
            playMedia,
            audioContext.current,
        ]
    )

    const stopMedia = useCallback(() => {
        setTracks([])
        setTrackIndex(0)
        setArtwork(undefined)
        setIsPlaying(false)

        if (audioRef.current) {
            audioRef.current.pause()
        }
    }, [setTracks, setTrackIndex, setArtwork, setIsPlaying, audioRef.current])

    const pauseMedia = useCallback(() => {
        setIsPlaying(false)
        audioRef.current?.pause()
    }, [setIsPlaying, audioRef.current])

    const skipMedia = useCallback(
        (newTimeMs: number) => {
            if (audioRef.current) {
                audioRef.current.currentTime = newTimeMs / 1000
            }

            setIsPlaying(true)
        },
        [audioRef.current, setIsPlaying]
    )

    const setVolume = useCallback(
        (volume: number) => {
            if (audioRef.current) {
                audioRef.current.volume = volume
            }
        },
        [audioRef.current]
    )

    const getTimeMs = useCallback(
        () => (audioRef.current ? audioRef.current.currentTime * 1000 : 0),
        [audioRef.current]
    )

    return (
        <AudioContext.Provider
            value={useMemo(
                () => ({
                    isPlaying,
                    tracks,
                    trackIndex,
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
                }),
                [
                    isPlaying,
                    tracks,
                    trackIndex,
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
                ]
            )}
        >
            <audio ref={audioRef} preload="auto" crossOrigin="anonymous" />
            {children}
        </AudioContext.Provider>
    )
}
