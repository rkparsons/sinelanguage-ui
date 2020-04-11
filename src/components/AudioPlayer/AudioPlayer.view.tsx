import { AudioPlayer } from './AudioPlayer.style'
import React from 'react'
import Waveform from '~/components/Waveform'

export default () => {
    return (
        <AudioPlayer>
            <Waveform soundCloudTrackID={430927230} />
        </AudioPlayer>
    )
}
