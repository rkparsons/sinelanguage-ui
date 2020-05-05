import { AnalyserContainer, AudioPlayer, PlayerBody } from './AudioPlayer.style'
import { Box, Grid, Slide, Typography } from '@material-ui/core'
import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import Analyser from './Analyser'
import Audio from './Audio'
import { ContentType } from '~/constants/contentType'
import Controls from './Controls'
import Progress from './Progress'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

// todo: move clientId to env vars
export default () => {
    const hideDelay = 5000
    const [isInteracted, setIsInteracted] = useState(false)
    const [isMinimised, setIsMinimised] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const [currentTimeMs, setCurrentTimeMs] = useState(0)
    const { selectedMedia, setSelectedMedia } = useContext(SelectedMediaContext)

    const getTracks = useCallback(() => {
        return selectedMedia?.content.__typename === ContentType.PODCAST
            ? [(selectedMedia.content as Podcast).track]
            : selectedMedia?.content.__typename === ContentType.RELEASE
            ? (selectedMedia.content as Release).tracks
            : []
    }, [selectedMedia])

    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState(1)
    const [selectedTracks, setSelectedTracks] = useState<Track[]>(getTracks())

    useEffect(() => {
        setIsMinimised(false)
        setIsInteracted(false)
        const hideIfNoInteraction = setTimeout(() => {
            if (!isInteracted) {
                setIsMinimised(true)
            }
        }, hideDelay)

        return () => clearTimeout(hideIfNoInteraction)
    }, [selectedMedia, hideDelay])

    useEffect(() => {
        setCurrentTimeMs(0)
    }, [selectedMedia])

    useRecursiveTimeout(() => {
        if (audioRef.current) {
            setCurrentTimeMs(audioRef.current.currentTime * 1000)
        }
    }, 100)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume, audioRef.current])

    const setTrackIndex = (index: number) => {
        if (selectedMedia) {
            setSelectedMedia({ content: selectedMedia.content, trackIndex: index })
        }
    }

    const onEnded = () => {
        if (selectedMedia && selectedMedia.trackIndex < selectedTracks.length - 1) {
            setTrackIndex(selectedMedia.trackIndex + 1)
        }
    }

    useEffect(() => {
        setIsPlaying(true)
        setSelectedTracks(getTracks())
    }, [selectedMedia])

    const onMouseOver = () => {
        setIsInteracted(true)
        setIsMinimised(false)
    }

    // todo: move clientId to env vars
    if (selectedMedia && selectedTracks[selectedMedia.trackIndex]) {
        return (
            <>
                <AudioPlayer
                    isMinimised={isMinimised}
                    onMouseOver={onMouseOver}
                    onMouseLeave={() => setIsMinimised(true)}
                >
                    <Progress
                        audioRef={audioRef}
                        currentTimeMs={currentTimeMs}
                        setCurrentTimeMs={setCurrentTimeMs}
                        durationMs={selectedTracks[selectedMedia.trackIndex].metadata.duration}
                        setIsPlaying={setIsPlaying}
                    />
                    <PlayerBody>
                        <Box display="flex">
                            <Box>
                                <SquareImage
                                    title={selectedMedia.content.title}
                                    image={selectedMedia.content.image}
                                />
                                <Controls
                                    trackIndex={selectedMedia.trackIndex}
                                    setTrackIndex={setTrackIndex}
                                    isPlaying={isPlaying}
                                    setIsPlaying={setIsPlaying}
                                    volume={volume}
                                    setVolume={setVolume}
                                    trackCount={selectedTracks.length}
                                />
                            </Box>
                            <Box flexGrow={1}>
                                <AnalyserContainer>
                                    <Typography>
                                        {selectedMedia.content.__typename === ContentType.RELEASE &&
                                            `${(selectedMedia.content as Release).artist.title.toUpperCase()}, `}
                                        <i>{selectedTracks[selectedMedia.trackIndex].title}</i>
                                    </Typography>
                                    <Typography>
                                        {moment.utc(currentTimeMs).format('HH:mm:ss')} /{' '}
                                        {moment
                                            .utc(
                                                selectedTracks[selectedMedia.trackIndex].metadata
                                                    .duration
                                            )
                                            .format('HH:mm:ss')}
                                    </Typography>
                                    {audioRef.current && (
                                        <Analyser
                                            showVisualisation={isPlaying && !isMinimised}
                                            audioRef={audioRef}
                                        />
                                    )}
                                </AnalyserContainer>
                            </Box>
                        </Box>
                    </PlayerBody>
                </AudioPlayer>
                <Audio
                    audioRef={audioRef}
                    src={`${
                        selectedTracks[selectedMedia.trackIndex].metadata.streamUrl
                    }?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                    isPlaying={isPlaying}
                    onEnded={onEnded}
                />
            </>
        )
    } else {
        return <></>
    }
}
