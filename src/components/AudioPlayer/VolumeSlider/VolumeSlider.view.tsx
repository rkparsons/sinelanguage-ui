import { Bar, ClickContainer, SVG } from './VolumeSlider.style'
import { useEffect, useRef, useState } from 'react'

import React from 'react'
import useAudioContext from '~/hooks/useAudioContext'
import { useMousePosition } from '~/hooks/useMousePosition'

export default () => {
    const noOfBars = 15
    const barSpacingPercent = 100 / noOfBars
    const barWidthPercent = barSpacingPercent / 3
    const [volumeLevel, setVolumeLevel] = useState(0.8)
    const containerRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState([0, 0])
    const [isHover, setIsHover] = useState(false)
    const { mouseX, mouseY } = useMousePosition()

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

    function getSliderPosition(yPosition: number) {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const position = Math.abs((100 * (rect.bottom - yPosition)) / rect.height) / 100.0

            return position
        } else {
            return 0
        }
    }

    function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (containerRef.current) {
            setVolumeLevel(getSliderPosition(event.clientY))
        }
    }

    function getBarActiveState(index: number) {
        if (isHover) {
            return index / noOfBars <= getSliderPosition(mouseY)
        } else {
            return index / noOfBars <= volumeLevel
        }
    }
    return (
        <ClickContainer
            ref={containerRef}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
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
                        isActive={getBarActiveState(index)}
                    />
                ))}
            </SVG>
        </ClickContainer>
    )
}
