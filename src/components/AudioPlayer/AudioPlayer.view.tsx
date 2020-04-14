import React, { useContext } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import { Podcast } from '~/cms/types'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import { Track } from '~/types'
import Waveform from '~/components/Waveform'
import useSoundCloudTracks from '~/hooks/useSoundCloudTracks'

export default () => {
    const { selectedMedia } = useContext(SelectedMediaContext)
    const trackLibrary = useSoundCloudTracks()
    const selectedTracks = []

    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        const podcastTrack = trackLibrary.find(
            x => x.soundcloud_id === (selectedMedia as Podcast).soundCloudTrackID
        )

        if (podcastTrack) {
            selectedTracks.push(podcastTrack)
        }
    }

    if (selectedMedia && selectedTracks.length) {
        return (
            <AudioPlayer>
                <Waveform selectedMedia={selectedMedia} tracks={selectedTracks} />
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
