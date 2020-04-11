import React, { useContext } from 'react'

import AudioContext from '~/contexts/AudioContext'
import { AudioPlayer } from './AudioPlayer.style'
import Waveform from '~/components/Waveform'

export default () => {
    const audio = useContext(AudioContext)

    return (
        <AudioPlayer>{audio.trackId && <Waveform soundCloudTrackID={audio.trackId} />}</AudioPlayer>
    )
}
