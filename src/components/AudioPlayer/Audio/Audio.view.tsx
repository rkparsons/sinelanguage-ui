import React, { RefObject } from 'react'

import { Track } from '~/cms/types'

type ViewProps = {
    track: Track
    audioRef: RefObject<HTMLAudioElement>
}

export default ({ track, audioRef }: ViewProps) => (
    <audio
        ref={audioRef}
        src={`${track.metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
        preload="auto"
    ></audio>
)
