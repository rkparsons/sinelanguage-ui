import { Grid, Typography } from '@material-ui/core'
import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import Controls from '~/components/AudioPlayer/Controls'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import Waveform from '~/components/Waveform'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

export default () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [trackIndex, setTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [timeStamp, setTimeStamp] = useState<string>('00:00:00')
    const [fractionPlayed, setFractionPlayed] = useState(0)

    const { selectedMedia } = useContext(SelectedMediaContext)

    const selectedTracks: Track[] = []

    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        selectedTracks.push((selectedMedia as Podcast).track)
    } else if (selectedMedia?.__typename === 'ContentfulRelease') {
        selectedTracks.push(...(selectedMedia as Release).tracks)
    }

    const updatePlayStatus = () => {
        if (audioRef.current) {
            setTimeStamp(moment.utc(audioRef.current.currentTime * 1000).format('H:mm:ss'))
            setFractionPlayed(
                (1000 * audioRef.current.currentTime) / selectedTracks[trackIndex].metadata.duration
            )
        }
    }

    useRecursiveTimeout(updatePlayStatus, 1000)

    const onWaveformClick = (progress: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime =
                (progress * selectedTracks[trackIndex].metadata.duration) / 1000
            updatePlayStatus()
            setIsPlaying(true)
        }
    }

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    useEffect(() => {
        updatePlayStatus()
        setIsPlaying(true)
    }, [trackIndex])

    if (selectedMedia && selectedTracks.length) {
        return (
            <AudioPlayer>
                <Grid container alignItems="flex-end">
                    <Grid item xs={1}>
                        <SquareImage title={selectedMedia.title} image={selectedMedia.image} />
                        <Controls
                            trackIndex={trackIndex}
                            setTrackIndex={setTrackIndex}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            trackCount={selectedTracks.length}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <Typography>
                                    {selectedMedia.uid} - {selectedMedia.title}
                                </Typography>
                                <Typography>{selectedTracks[trackIndex].title}</Typography>
                                <Typography>{timeStamp}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Waveform
                                    samples={selectedTracks[trackIndex].metadata.samples}
                                    fractionPlayed={fractionPlayed}
                                    setFractionPlayed={onWaveformClick}
                                />
                                <audio
                                    ref={audioRef}
                                    src={`${selectedTracks[trackIndex].metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                                    preload="auto"
                                ></audio>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
