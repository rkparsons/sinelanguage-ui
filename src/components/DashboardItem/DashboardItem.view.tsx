import { Artist, Podcast, Release } from '~/cms/types'
import { DashboardItem, DashboardItemInfo } from './DashboardItem.style'
import { IconButton, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    dashboardItem: Artist | Release | Podcast
}

export default ({ dashboardItem }: ViewProps) => {
    const { __typename, title, uid, image } = dashboardItem
    const type = __typename.replace('Contentful', '').toLowerCase()

    // todo: replace format with enum
    const isVideo =
        dashboardItem.__typename === 'ContentfulRelease' &&
        (dashboardItem as Release).format === 'Video'

    return (
        <DashboardItem widthMultiplier={isVideo ? 2 : 1}>
            <Link to={`/${type}s/${uid}`.toLowerCase()}>
                {/* <SquareImage title={title} image={image} /> */}
                <Image title={title} alt={title} sizes={{ ...image.fluid }} />
            </Link>
            <DashboardItemInfo>
                <Typography>{title}</Typography>
            </DashboardItemInfo>
            {dashboardItem.__typename !== 'ContentfulEvent' && (
                <SelectedMediaContext.Consumer>
                    {({ setSelectedMedia }) => (
                        <IconButton
                            onClick={() => {
                                setSelectedMedia(dashboardItem)
                            }}
                        >
                            <PlayArrow />
                        </IconButton>
                    )}
                </SelectedMediaContext.Consumer>
            )}
        </DashboardItem>
    )
}
