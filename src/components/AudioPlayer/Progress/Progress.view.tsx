import { PlayedBar, ProgressBar } from './Progress.style'
import React, { RefObject, useRef } from 'react'

type ViewProps = {
    audioRef: RefObject<HTMLAudioElement>
    currentTimeMs: number
    setCurrentTimeMs(milliseconds: number): void
    durationMs: number
    setIsPlaying(isPlaying: boolean): void
}

export default ({
    audioRef,
    currentTimeMs,
    setCurrentTimeMs,
    durationMs,
    setIsPlaying,
}: ViewProps) => {
    const progressBarRef = useRef<HTMLDivElement>(null)

    const skipToTime = (event: React.MouseEvent) => {
        if (!progressBarRef.current || !audioRef.current) {
            return
        }

        const progressBar = progressBarRef.current.getBoundingClientRect()
        const progressFraction =
            (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)
        const newTimeMs = progressFraction * durationMs
        audioRef.current.currentTime = newTimeMs / 1000
        setCurrentTimeMs(newTimeMs)
        setIsPlaying(true)
    }

    return (
        <ProgressBar ref={progressBarRef} onClick={skipToTime}>
            <PlayedBar width={(100 * currentTimeMs) / durationMs} />
        </ProgressBar>
    )
}
