import {
    AnalyserContainer,
    AudioPlayer,
    ImageContainer,
    PlayerBody,
    PlayerText,
} from './AudioPlayer.style'
import { Box, Grid, Hidden, Typography, withWidth } from '@material-ui/core'
import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import Analyser from './Analyser'
import Audio from './Audio'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Close } from '@material-ui/icons'
import { ContentType } from '~/constants/contentType'
import Controls from './Controls'
import IconButton from '~/components/IconButton'
import Progress from './Progress'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import { getTimestamp } from '~/utils/date'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    width: Breakpoint
}

// todo: move clientId to env vars
export default withWidth()(({ width }: ViewProps) => {
    const isMobile = ['xs', 'sm'].includes(width)
    const audioPlayer = useRef<HTMLDivElement>(null)
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

    const getDuration = () => {
        return selectedMedia ? selectedTracks[selectedMedia.trackIndex].metadata.duration : 0
    }

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
                    ref={audioPlayer}
                    height={audioPlayer.current?.getBoundingClientRect().height || 0}
                    isMinimised={!isMobile && isMinimised}
                    onMouseOver={onMouseOver}
                    onMouseLeave={() => setIsMinimised(true)}
                >
                    <Progress
                        audioRef={audioRef}
                        currentTimeMs={currentTimeMs}
                        setCurrentTimeMs={setCurrentTimeMs}
                        durationMs={getDuration()}
                        setIsPlaying={setIsPlaying}
                    />
                    <PlayerBody>
                        <Box display="flex">
                            <Box>
                                <Hidden smDown>
                                    <ImageContainer>
                                        <SquareImage
                                            title={selectedMedia.content.title}
                                            image={selectedMedia.content.image}
                                        />
                                    </ImageContainer>
                                </Hidden>
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
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <PlayerText>
                                                <Typography variant="h5" gutterBottom>
                                                    {selectedMedia.content.__typename ===
                                                        ContentType.RELEASE &&
                                                        `${(selectedMedia.content as Release).artist.title.toUpperCase()}, `}
                                                    <i>
                                                        {
                                                            selectedTracks[selectedMedia.trackIndex]
                                                                .title
                                                        }
                                                    </i>
                                                </Typography>
                                                <Typography variant="h5">
                                                    {getTimestamp(currentTimeMs, getDuration())}/
                                                    {getTimestamp(getDuration(), getDuration())}
                                                </Typography>
                                            </PlayerText>
                                        </Grid>
                                        {true && (
                                            <Grid item>
                                                <IconButton
                                                    icon={<Close />}
                                                    onClick={() => setSelectedMedia()}
                                                    isLight={true}
                                                />
                                            </Grid>
                                        )}
                                    </Grid>
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
})
