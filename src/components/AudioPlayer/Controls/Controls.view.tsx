import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'

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
    const skipPrevious = () => {
        setIsPlaying(false)
        setTrackIndex(trackIndex - 1)
    }

    const skipNext = () => {
        setIsPlaying(false)
        setTrackIndex(trackIndex + 1)
    }

    return (
        <>
            <IconButton onClick={skipPrevious} disabled={trackIndex === 0}>
                <SkipPrevious />
            </IconButton>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={skipNext} disabled={trackIndex === trackCount - 1}>
                <SkipNext />
            </IconButton>
        </>
    )
}
