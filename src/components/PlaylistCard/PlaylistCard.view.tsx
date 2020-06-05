import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import SLR_Selections from './SLR_Selections.mp4'
import TeaserVideo from '~/components/TeaserVideo'
import { Typography } from '@material-ui/core'

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
            </ContentCardDetail>
        </Column>
    )
}
