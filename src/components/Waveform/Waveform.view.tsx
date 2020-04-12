import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import { Player, WaveContainer } from './Waveform.style'
import React, { useEffect, useState } from 'react'
import { Track, Waveform } from '~/types'

import Loadable from '@loadable/component'
import { Podcast } from '~/cms/types'

const ReactWaves = Loadable<any>(() => import('@dschoon/react-waves'))

type ViewProps = {
    audio: Podcast
    track: Track
}

export default ({ audio, track }: ViewProps) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <Player>
            <Typography>
                {audio.uid} - {audio.title}
            </Typography>
            <IconButton
                onClick={() => {
                    setIsPlaying(!isPlaying)
                }}
            >
                {isPlaying ? <Stop /> : <PlayArrow />}
            </IconButton>

            <WaveContainer onClick={() => setIsPlaying(true)}>
                <ReactWaves
                    audioPeaks={track.samples}
                    audioFile={`https://api.soundcloud.com/tracks/${audio.soundCloudTrackID}/stream?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                    className={'react-waves'}
                    options={{
                        backend: 'MediaElement',
                        barHeight: 1,
                        cursorWidth: 0,
                        height: 100,
                        fillParent: true,
                        hideScrollbar: true,
                        progressColor: '#000000',
                        responsive: true,
                        waveColor: '#D1D6DA',
                    }}
                    volume={1}
                    zoom={0.05}
                    playing={isPlaying}
                />
            </WaveContainer>
        </Player>
    )
}
