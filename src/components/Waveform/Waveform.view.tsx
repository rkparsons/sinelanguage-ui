import { PlayArrow, Stop } from '@material-ui/icons'
import { Player, WaveContainer } from './Waveform.style'
import React, { useCallback, useEffect, useState } from 'react'

import { IconButton } from '@material-ui/core'
import Loadable from '@loadable/component'

const ReactWaves = Loadable<any>(() => import('@dschoon/react-waves'))

type Track = {
    artwork_url: string
    download_url: string
    waveform_url: string
    stream_url: string
}

type Waveform = {
    width: number
    height: number
    samples: number[]
}

type ViewProps = {
    soundCloudTrackID: number
}

export default ({ soundCloudTrackID }: ViewProps) => {
    const [samples, setSamples] = useState<number[]>()
    const [isPlaying, setIsPlaying] = useState(false)
    // todo: do waveform fetching when creating nodes at build time

    const getSamples = async (soundCloudTrackID: number) => {
        const SC = await import('soundcloud')

        SC.initialize({ client_id: 'c5a171200f3a0a73a523bba14a1e0a29' })
        SC.get(`/tracks/${soundCloudTrackID}`)
            .then((track: Track) => fetch(track.waveform_url.replace('.png', '.json')))
            .then((response: Response) => response.json())
            .then((waveform: Waveform) => {
                const maxValue = Math.max(...waveform.samples)
                const normalizedSamples = waveform.samples.map(x => x / maxValue)
                setSamples(normalizedSamples)
            })
    }

    useEffect(() => {
        getSamples(soundCloudTrackID)
    }, [soundCloudTrackID])

    return (
        <Player>
            <IconButton
                onClick={() => {
                    setIsPlaying(!isPlaying)
                }}
            >
                {isPlaying ? <Stop /> : <PlayArrow />}
            </IconButton>

            {samples && (
                <WaveContainer onClick={() => setIsPlaying(true)}>
                    <ReactWaves
                        audioPeaks={samples}
                        audioFile={`https://api.soundcloud.com/tracks/${soundCloudTrackID}/stream?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
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
            )}
        </Player>
    )
}
