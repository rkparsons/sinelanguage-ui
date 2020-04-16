import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import Audio from './Audio'
import { AudioPlayer } from './AudioPlayer.style'
import Controls from './Controls'
import { Grid } from '@material-ui/core'
import Info from './Info'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import Waveform from './Waveform'
import moment from 'moment'

export default () => {
    const [trackIndex, setTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [fractionPlayed, setFractionPlayed] = useState(0)
    const [startTimeMs, setStartTimeMs] = useState(0)
    const [timestamp, setTimestamp] = useState<string>('00:00:00')

    const { selectedMedia } = useContext(SelectedMediaContext)

    const selectedTracks: Track[] = []

    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        selectedTracks.push((selectedMedia as Podcast).track)
    } else if (selectedMedia?.__typename === 'ContentfulRelease') {
        selectedTracks.push(...(selectedMedia as Release).tracks)
    }

    const updatePlayStatus = (currentTimeMs: number) => {
        setFractionPlayed(
            selectedTracks.length ? currentTimeMs / selectedTracks[trackIndex].metadata.duration : 0
        )
        setTimestamp(moment.utc(currentTimeMs).format('H:mm:ss'))
    }

    const handleWaveformClick = (progress: number) => {
        const newTimeMs = progress * selectedTracks[trackIndex].metadata.duration

        setStartTimeMs(newTimeMs)
        updatePlayStatus(newTimeMs)
        setIsPlaying(true)
    }

    const handleTimeUpdate = useCallback((currentTimeMs: number) => {
        updatePlayStatus(currentTimeMs)
    }, [])

    useEffect(() => {
        updatePlayStatus(0)
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
                                <Info
                                    title={`${selectedMedia.uid} - ${selectedMedia.title}`}
                                    timestamp={timestamp}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Waveform
                                    samples={selectedTracks[trackIndex].metadata.samples}
                                    fractionPlayed={fractionPlayed}
                                    onClick={handleWaveformClick}
                                />
                                <Audio
                                    src={`${selectedTracks[trackIndex].metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                                    isPlaying={isPlaying}
                                    startTimeMs={startTimeMs}
                                    onTimeUpdate={handleTimeUpdate}
                                />
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
