import { Link, Typography } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import React from 'react'
import SLR_Selections from './SLR_Selections.mp4'
import TeaserVideo from '~/components/TeaserVideo'

export default () => {
    return (
        <Column widthMultiplier={1}>
            <Link href="http://slr.link/selections" target="_blank" rel="noopener">
                <TeaserVideo src={SLR_Selections} />
            </Link>
            <ContentCardDetail>
                <Typography variant="body1">
                    <i>SLR SELECTIONS</i>
                </Typography>
                <Typography variant="body1">PLAYLIST</Typography>
            </ContentCardDetail>
        </Column>
    )
}
