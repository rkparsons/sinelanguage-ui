import React, { RefObject, useEffect, useRef, useState } from 'react'

import { SVG } from './Waveform.style'
import useWindowSize from '~/hooks/useWindowSize'

type ViewProps = {
    audioRef: RefObject<HTMLAudioElement>
    samples: number[]
    currentTimeMs: number
    setCurrentTimeMs(milliseconds: number): void
    durationMs: number
    setIsPlaying(isPlaying: boolean): void
}

export default ({
    audioRef,
    samples,
    currentTimeMs,
    setCurrentTimeMs,
    durationMs,
    setIsPlaying,
}: ViewProps) => {
    const windowSize = useWindowSize()
    const svgRef = useRef<SVGSVGElement>(null)
    const [svgWidth, setSvgWidth] = useState<number>(window.innerWidth)
    const [samplesChunked, setSamplesChunked] = useState<number[]>(new Array(1800).fill(0))
    const lineHeight = 50

    useEffect(() => {
        if (svgRef.current) {
            const pixelWidth = svgRef.current.getBoundingClientRect().width
            setSvgWidth(pixelWidth)

            const noOfSamples = samples.length
            const pixelsPerChunk = 5
            const numberOfChunks = pixelWidth / pixelsPerChunk
            const chunkSize = noOfSamples / numberOfChunks
            let chunks = []
            for (var i = 0; i < noOfSamples; i += chunkSize) {
                chunks.push(samples.slice(i, i + chunkSize))
            }
            const chunksAveraged = chunks.map(
                (chunk) => chunk.reduce((a, b) => a + b, 0) / chunk.length
            )

            setSamplesChunked(chunksAveraged)
        }
    }, [windowSize, svgRef.current, samples, setSvgWidth, setSamplesChunked])

    const handleWaveformClick = (event: React.MouseEvent) => {
        if (!svgRef.current || !audioRef.current) {
            return
        }

        const progressBar = svgRef.current.getBoundingClientRect()
        const progressFraction =
            (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)
        const newTimeMs = progressFraction * durationMs
        audioRef.current.currentTime = newTimeMs / 1000
        setCurrentTimeMs(newTimeMs)
        setIsPlaying(true)
    }

    return (
        <>
            <SVG
                ref={svgRef}
                height={lineHeight}
                onClick={handleWaveformClick}
                viewBox={`0 0 ${svgWidth} ${lineHeight}`}
                preserveAspectRatio="none"
                transform={`scale(1, -1)`}
            >
                {svgWidth &&
                    samplesChunked.map((sample, index) => {
                        const position = index / samplesChunked.length
                        const lineSpacing = svgWidth / (samplesChunked.length + 1)

                        return (
                            <rect
                                key={index}
                                x={(index + 1) * lineSpacing}
                                y={0}
                                width={lineSpacing / 2}
                                height={sample * lineHeight}
                                fill={position < currentTimeMs / durationMs ? 'black' : 'grey'}
                            />
                        )
                    })}
            </SVG>
        </>
    )
}
