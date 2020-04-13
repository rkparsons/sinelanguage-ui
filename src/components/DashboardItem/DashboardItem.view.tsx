import { Artist, Podcast, Release } from '~/cms/types'
import { IconButton, Typography } from '@material-ui/core'

import { AudioContext } from '~/contexts/AudioContext'
import { Link } from 'gatsby'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
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
            {dashboardItem.__typename === 'ContentfulPodcast' && (
                <AudioContext.Consumer>
                    {({ audio, setAudio }) => (
                        <IconButton
                            onClick={() => {
                                setAudio(dashboardItem as Podcast)
                            }}
                        >
                            <PlayArrow />
                        </IconButton>
                    )}
                </AudioContext.Consumer>
            )}
        </>
    )
}
