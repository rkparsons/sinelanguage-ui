import { BarContainer, PlayedBar, ProgressBar } from './Progress.style'
import React, { useRef } from 'react'

import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    timeMs: number
}

export default ({ timeMs }: ViewProps) => {
    const progressBarRef = useRef<HTMLDivElement>(null)

    const { durationMs, skipMedia } = useAudioContext()

    function skipToTime(event: React.MouseEvent) {
        if (!progressBarRef.current) {
            return
        }

        const progressBar = progressBarRef.current.getBoundingClientRect()
        const progressFraction =
            (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)
        const newTimeMs = progressFraction * durationMs

        skipMedia(newTimeMs)
    }

    return (
        <BarContainer onClick={skipToTime}>
            <ProgressBar ref={progressBarRef} />
            {durationMs > 0 && <PlayedBar width={(100 * timeMs) / durationMs} />}
        </BarContainer>
    )
}
