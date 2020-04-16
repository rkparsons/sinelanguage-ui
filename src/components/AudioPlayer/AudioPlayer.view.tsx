import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useState } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import AudioWaveform from './AudioWaveform'
import Controls from './Controls'
import { Grid } from '@material-ui/core'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'

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
                        <AudioWaveform
                            track={selectedTracks[trackIndex]}
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
