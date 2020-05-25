import { Artist, Podcast, Release } from '~/cms/types'

import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import { Unicode } from '~/constants/unicode'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    content: Artist | Podcast | Release
    trackIndex: number
    isLight: boolean
    isLarge?: boolean
    text?: string
}

export default ({ content, trackIndex, isLight, isLarge = true, text }: ViewProps) => {
    const { loadMedia } = useAudioContext()

    return (
        <IconButton
            label={
                <Typography variant={isLarge ? 'h3' : 'body1'}>{`${Unicode.PLAY_LEFT_ALIGN} ${
                    text || ''
                }`}</Typography>
            }
            onClick={() => {
                loadMedia(content, trackIndex)
            }}
            isLight={isLight}
        />
    )
}
