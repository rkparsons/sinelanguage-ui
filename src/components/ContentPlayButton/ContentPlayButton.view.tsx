import { Artist, Podcast, Release } from '~/cms/types'

import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { Typography } from '@material-ui/core'
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
                text ? (
                    <Typography variant={isLarge ? 'h3' : 'body1'}>{text}</Typography>
                ) : undefined
            }
            icon={<PlayArrow fontSize={isLarge ? 'large' : 'small'} />}
            onClick={() => {
                loadMedia(content, trackIndex)
            }}
            isLight={isLight}
        />
    )
}
