import { Bar, ClickContainer, SVG } from './VolumeSlider.style'
import { useEffect, useRef, useState } from 'react'

import React from 'react'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const noOfBars = 15
    const barSpacingPercent = 100 / noOfBars
    const barWidthPercent = barSpacingPercent / 3
    const [volumeLevel, setVolumeLevel] = useState(0.8)
    const containerRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState([0, 0])

    const { setVolume } = useAudioContext()

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setSize([rect.width, rect.height])
        }
    }, [containerRef.current])

    useEffect(() => {
        setVolume(volumeLevel)
    }, [volumeLevel])

    function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const position = Math.abs((100 * (rect.bottom - event.clientY)) / rect.height) / 100.0
            setVolumeLevel(position)
        }
    }

    return (
        <ClickContainer ref={containerRef} onClick={onClick}>
            <SVG
                width={`${size[0]}px`}
                height={`${size[1]}px`}
                viewBox={`0 0 ${size[0]} ${size[1]}`}
                preserveAspectRatio="none"
            >
                {[...Array(noOfBars + 1).keys()].map((index) => (
                    <Bar
                        key={index}
                        y={`${100 - index * barSpacingPercent}%`}
                        height={`${barWidthPercent}%`}
                        isActive={index / noOfBars <= volumeLevel}
                    />
                ))}
            </SVG>
        </ClickContainer>
    )
}
