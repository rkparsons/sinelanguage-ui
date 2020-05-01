import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import { ContentType } from '~/constants/contentType'
import Controls from './Controls'
import { Grid } from '@material-ui/core'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'
import TimeControl from './TimeControl'

// todo: move clientId to env vars
export default () => {
    const audioRef = useRef<HTMLAudioElement>(null)
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

    const setTrackIndex = (index: number) => {
        if (selectedMedia) {
            setSelectedMedia({ content: selectedMedia.content, trackIndex: index })
        }
    }

    useEffect(() => {
        setIsPlaying(true)
        setSelectedTracks(getTracks())
    }, [selectedMedia])

    // todo: move clientId to env vars
    if (selectedMedia && selectedTracks[selectedMedia.trackIndex]) {
        return (
            <AudioPlayer>
                <Grid container alignItems="stretch" spacing={5}>
                    <Grid item xs={1}>
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
                    </Grid>
                    <Grid item xs={11}>
                        <TimeControl
                            title={selectedTracks[selectedMedia.trackIndex].metadata.title}
                            streamUrl={`${
                                selectedTracks[selectedMedia.trackIndex].metadata.streamUrl
                            }?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                            samples={selectedTracks[selectedMedia.trackIndex].metadata.samples}
                            durationMs={selectedTracks[selectedMedia.trackIndex].metadata.duration}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            volume={volume}
                            audioRef={audioRef}
                        />
                    </Grid>
                </Grid>
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
