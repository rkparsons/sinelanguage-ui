import { Artist, Podcast, Release } from '~/cms/types'
import { IconButton, Typography } from '@material-ui/core'

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

    return (
        <>
            <Link to={`/${type}s/${uid}`.toLowerCase()}>
                <SquareImage title={title} image={image} />
                <Typography>{title}</Typography>
            </Link>
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
        </>
    )
}
