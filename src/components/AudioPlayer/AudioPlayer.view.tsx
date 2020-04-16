import { Artist, Podcast, Release, Track } from '~/cms/types'
import React, { useContext } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import Waveform from '~/components/Waveform'

export default () => {
    const { selectedMedia } = useContext(SelectedMediaContext)

    const selectedTracks: Track[] = []

    console.log(selectedMedia)

    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        selectedTracks.push((selectedMedia as Podcast).track)
    } else if (selectedMedia?.__typename === 'ContentfulRelease') {
        selectedTracks.push(...(selectedMedia as Release).tracks)
    }

    if (selectedMedia && selectedTracks.length) {
        return (
            <AudioPlayer>
                <Waveform media={selectedMedia} tracks={selectedTracks} />
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
