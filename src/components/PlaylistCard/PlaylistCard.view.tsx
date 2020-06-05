import { Box, Link, Typography } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import IconButton from '~/components/IconButton'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import SLR_Selections from './SLR_Selections.mp4'
import TeaserVideo from '~/components/TeaserVideo'
import { Unicode } from '~/constants/unicode'

export default () => {
    return (
        <Column widthMultiplier={1}>
            <MediaLink url="http://slr.link/selections" isExternal={true}>
                <TeaserVideo src={SLR_Selections} />
            </MediaLink>
            <ContentCardDetail>
                <Typography variant="body1">
                    <i>SLR Selections</i>
                </Typography>
                <Typography variant="body1">Playlist</Typography>
                <a href="http://slr.link/selections" target="_blank" rel="noopener">
                    <IconButton
                        label={
                            <Typography variant="body1">{`${Unicode.PLAY_LEFT_ALIGN} LISTEN ON SPOTIFY`}</Typography>
                        }
                        onClick={() => {}}
                        isLight={false}
                    />
                </a>
            </ContentCardDetail>
        </Column>
    )
}
