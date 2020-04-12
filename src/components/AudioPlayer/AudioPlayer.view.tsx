import React, { useContext } from 'react'

import { AudioContext } from '~/contexts/AudioContext'
import { AudioPlayer } from './AudioPlayer.style'
import Waveform from '~/components/Waveform'

export default () => {
    const { trackId, setTrackId } = useContext(AudioContext)

    return <AudioPlayer>{trackId && <Waveform soundCloudTrackID={trackId} />}</AudioPlayer>
}
