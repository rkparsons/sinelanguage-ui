import { Artist, Podcast, Release } from '~/cms/types'
import React, { useContext } from 'react'

import { AudioPlayer } from './AudioPlayer.style'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import { Track } from '~/types'
import Waveform from '~/components/Waveform'
import useSoundCloudTracks from '~/hooks/useSoundCloudTracks'

export default () => {
    const { selectedMedia } = useContext(SelectedMediaContext)
    const trackMetadataLibrary = useSoundCloudTracks()
    const selectedTracksMetadata = []

    // Wrap podcast track in same cms type
    if (selectedMedia?.__typename === 'ContentfulPodcast') {
        const podcast = selectedMedia as Podcast
        const podcastTrackMetadata = trackMetadataLibrary.find(
            x => x.soundcloud_id === podcast.soundCloudTrackID
        )

        if (podcastTrackMetadata) {
            selectedTracksMetadata.push(podcastTrackMetadata)
        }
    } else if (selectedMedia?.__typename === 'ContentfulRelease') {
        const release = selectedMedia as Release
        const releaseTrackIds = release.tracks.map(track => track.soundCloudID)
        const releaseTracksMetadata = trackMetadataLibrary.filter(track =>
            releaseTrackIds.includes(track.soundcloud_id)
        )

        if (releaseTracksMetadata) {
            selectedTracksMetadata.push(...releaseTracksMetadata)
        }
    }

    if (selectedMedia && selectedTracksMetadata.length) {
        return (
            <AudioPlayer>
                <Waveform selectedMedia={selectedMedia} tracks={selectedTracksMetadata} />
            </AudioPlayer>
        )
    } else {
        return <></>
    }
}
