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
    const [trackIndex, setTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    const { selectedMedia } = useContext(SelectedMediaContext)

    const selectedTracks: Track[] = []

    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        selectedTracks.push((selectedMedia as Podcast).track)
    } else if (selectedMedia?.__typename === 'ContentfulRelease') {
        selectedTracks.push(...(selectedMedia as Release).tracks)
    }

    useEffect(() => {
        setIsPlaying(true)
    }, [trackIndex, setIsPlaying])

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
                        <TimeControl
                            title={selectedTracks[trackIndex].metadata.title}
                            streamUrl={`${selectedTracks[trackIndex].metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                            samples={selectedTracks[trackIndex].metadata.samples}
                            durationMs={selectedTracks[trackIndex].metadata.duration}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    </Grid>
                </Grid>
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
