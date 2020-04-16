import React, { useCallback, useEffect, useRef, useState } from 'react'

import { SVG } from './Waveform.style'
import useWindowSize from '~/hooks/useWindowSize'

type ViewProps = {
    samples: number[]
    fractionPlayed: number
    setFractionPlayed(fractionPlayed: number): void
}

export default ({ samples, fractionPlayed, setFractionPlayed }: ViewProps) => {
    const windowSize = useWindowSize()
    const svgRef = useRef<SVGSVGElement>(null)
    const [svgWidth, setSvgWidth] = useState<number>()
    const [samplesChunked, setSamplesChunked] = useState<number[]>([])
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
                chunk => chunk.reduce((a, b) => a + b, 0) / chunk.length
            )

            setSamplesChunked(chunksAveraged)
        }
    }, [windowSize, svgRef.current, samples, setSvgWidth, setSamplesChunked])

    const handleWaveformClick = useCallback(
        (event: React.MouseEvent) => {
            if (svgRef.current) {
                const progressBar = svgRef.current.getBoundingClientRect()
                const progress =
                    (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)

                setFractionPlayed(progress)
            }
        },
        [svgRef.current]
    )

    return (
        <>
            <SVG
                ref={svgRef}
                height={lineHeight}
                onClick={handleWaveformClick}
                viewBox={`0 0 ${svgWidth} ${lineHeight}`}
                preserveAspectRatio="none"
            >
                {svgWidth &&
                    samplesChunked.map((sample, index) => {
                        const position = index / samplesChunked.length
                        const lineSpacing = svgWidth / (samplesChunked.length + 1)

                        return (
                            <line
                                key={index}
                                x1={(index + 1) * lineSpacing}
                                y1={lineHeight}
                                x2={(index + 1) * lineSpacing}
                                y2={(1 - sample) * lineHeight}
                                stroke={position < fractionPlayed ? 'black' : 'grey'}
                                strokeWidth={lineSpacing / 2}
                            />
                        )
                    })}
            </SVG>
        </>
    )
}
