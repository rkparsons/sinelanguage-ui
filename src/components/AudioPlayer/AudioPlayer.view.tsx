import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useState } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import Controls from './Controls'
import { Grid } from '@material-ui/core'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import TimeControl from './TimeControl'

// todo: move clientId to env vars
export default () => {
    const { selectedMedia } = useContext(SelectedMediaContext)

    const getTracks = useCallback(() => {
        return selectedMedia?.__typename === 'ContentfulPodcast'
            ? [(selectedMedia as Podcast).track]
            : selectedMedia?.__typename === 'ContentfulRelease'
            ? (selectedMedia as Release).tracks
            : []
    }, [selectedMedia])

    const [trackIndex, setTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState(100)
    const [selectedTracks, setSelectedTracks] = useState<Track[]>(getTracks())

    useEffect(() => {
        setIsPlaying(true)
        setSelectedTracks(getTracks())
        setTrackIndex(0)
    }, [selectedMedia, setTrackIndex])

    if (selectedMedia && selectedTracks[trackIndex]) {
        return (
            <AudioPlayer>
                <Grid container alignItems="flex-end" spacing={5}>
                    <Grid item xs={1}>
                        <SquareImage title={selectedMedia.title} image={selectedMedia.image} />
                        <Controls
                            trackIndex={trackIndex}
                            setTrackIndex={setTrackIndex}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            volume={volume}
                            setVolume={setVolume}
                            trackCount={selectedTracks.length}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <TimeControl
                            title={selectedTracks[trackIndex].metadata.title}
                            streamUrl={`${selectedTracks[trackIndex].metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                            samples={selectedTracks[trackIndex].metadata.samples}
                            durationMs={selectedTracks[trackIndex].metadata.duration}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            volume={volume}
                            setVolume={setVolume}
                        />
                    </Grid>
                </Grid>
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
