import { PlayArrow, SkipNext, SkipPrevious, Stop } from '@material-ui/icons'

import { IconButton } from '@material-ui/core'
import React from 'react'

type ControlsProps = {
    trackIndex: number
    setTrackIndex(trackIndex: number): void
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    trackCount: number
}

export default ({
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    trackCount,
}: ControlsProps) => {
    return (
        <>
            <IconButton onClick={() => setTrackIndex(trackIndex - 1)} disabled={trackIndex === 0}>
                <SkipPrevious />
            </IconButton>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Stop /> : <PlayArrow />}
            </IconButton>
            <IconButton
                onClick={() => setTrackIndex(trackIndex + 1)}
                disabled={trackIndex === trackCount - 1}
            >
                <SkipNext />
            </IconButton>
        </>
    )
}
