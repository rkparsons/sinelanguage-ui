import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Track, Waveform } from '~/types'

import Loadable from '@loadable/component'
import { Podcast } from '~/cms/types'
import { SVG } from './WaveformBars.style'

const ReactWaves = Loadable<any>(() => import('@dschoon/react-waves'))

type ViewProps = {
    audio: Podcast
    track: Track
}

export default ({ audio, track }: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const lineHeight = 50,
        lineSpacing = 4

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

            <SVG ref={svgRef} height={lineHeight}>
                {track.samples.map((sample, index) => (
                    <line
                        key={index}
                        x1={(index + 1) * lineSpacing}
                        y1={lineHeight}
                        x2={(index + 1) * lineSpacing}
                        y2={(1 - sample) * lineHeight}
                    />
                ))}
            </SVG>
        </>
    )
}
