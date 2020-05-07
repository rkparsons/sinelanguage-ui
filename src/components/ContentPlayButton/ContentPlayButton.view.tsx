import { Artist, Podcast, Release } from '~/cms/types'

import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import { Typography } from '@material-ui/core'

type ViewProps = {
    content: Artist | Podcast | Release
    trackIndex: number
    isLight: boolean
    isLarge?: boolean
}

export default ({ content, trackIndex, isLight, isLarge = true }: ViewProps) => {
    return (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <IconButton
                    label={<Typography variant={isLarge ? 'h3' : 'body1'}>PLAY</Typography>}
                    icon={<PlayArrow fontSize={isLarge ? 'large' : 'small'} />}
                    onClick={() => {
                        setSelectedMedia({ content: content, trackIndex: trackIndex })
                    }}
                    isLight={isLight}
                />
            )}
        </SelectedMediaContext.Consumer>
    )
}
