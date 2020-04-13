import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Track, Waveform } from '~/types'

import Loadable from '@loadable/component'
import { Podcast } from '~/cms/types'
import { SVG } from './Waveform.style'

const ReactWaves = Loadable<any>(() => import('@dschoon/react-waves'))

type ViewProps = {
    audio: Podcast
    track: Track
}

export default ({ audio, track }: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const min_distance = 7,
        max_distance = 22,
        number_of_lines = 100,
        line_height = 50,
        line_spacing = 4,
        line_width = 2,
        line_color = '#000000'

    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.innerHTML = ''
            const svgns = 'http://www.w3.org/2000/svg'

            track.samples.forEach((sample, index) => {
                const y1 = line_height
                const y2 = (1 - sample) * line_height
                const line = document.createElementNS(svgns, 'line')
                const x = index * line_spacing

                line.setAttributeNS(null, 'x1', x.toString())
                line.setAttributeNS(null, 'y1', y1.toString())
                line.setAttributeNS(null, 'x2', x.toString())
                line.setAttributeNS(null, 'y2', y2.toString())
                line.setAttributeNS(null, 'stroke-width', line_width.toString())
                line.setAttributeNS(null, 'stroke', line_color)

                svgRef.current!.appendChild(line)
            })
        }
    }, [svgRef.current, track.samples])

    return (
        <>
            <Typography>
                {audio.uid} - {audio.title}
            </Typography>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Stop /> : <PlayArrow />}
            </IconButton>

            <audio
                ref={audioRef}
                src={`${track.stream_url}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                preload="auto"
            ></audio>

            <SVG ref={svgRef} xmlns="http://www.w3.org/2000/svg" height={line_height}></SVG>
        </>
    )
}
