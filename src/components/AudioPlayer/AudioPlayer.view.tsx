import React, { useContext } from 'react'

import { AudioContext } from '~/contexts/AudioContext'
import { AudioPlayer } from './AudioPlayer.style'
import WaveformBars from '~/components/WaveformBars'
import useSoundCloudTracks from '~/hooks/useSoundCloudTracks'

export default () => {
    const { audio, setAudio } = useContext(AudioContext)
    const tracks = useSoundCloudTracks()
    const track = tracks.find(x => audio && x.soundcloud_id === audio.soundCloudTrackID)

    return (
        <AudioPlayer>{audio && track && <WaveformBars audio={audio} track={track} />}</AudioPlayer>
    )
}
