import React, { useEffect, useRef, useState } from 'react'
import { SVG, Visualisation } from './VisualizerSVG.style'

type VisualiserProps = {
    audioData: Uint8Array
}

export default ({ audioData }: VisualiserProps) => {
    const svg = useRef<SVGSVGElement>(null)

    return (
        <Visualisation>
            <SVG ref={svg}>
                {Array.from(audioData).map((sample, index) => {
                    const lineSpacing =
                        svg.current!.getBoundingClientRect().width / audioData.length

                    if (index === 0) {
                        return <></>
                    }

                    return (
                        <line
                            key={index}
                            x1={(index - 1) * lineSpacing}
                            y1={audioData[index - 1]}
                            x2={index * lineSpacing}
                            y2={sample}
                            stroke="black"
                            strokeWidth={1}
                        />
                    )
                })}
            </SVG>
        </Visualisation>
    )
}
