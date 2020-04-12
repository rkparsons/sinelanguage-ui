import { Artist, Podcast, Release } from '~/cms/types'
import { IconButton, Typography } from '@material-ui/core'

import { AudioContext } from '~/contexts/AudioContext'
import { Flipped } from 'react-flip-toolkit'
import { LinkShowHide } from './DashboardItem.style'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    dashboardItem: Artist | Release | Podcast
    filter?: string
}

export default ({ dashboardItem, filter }: ViewProps) => {
    const { __typename, title, uid, image } = dashboardItem
    const type = __typename.replace('Contentful', '').toLowerCase()
    const isVisible = !filter || `${type}s` === filter

    return (
        <>
            <Flipped flipId={uid} stagger opacity translate={false}>
                <LinkShowHide isVisible={isVisible} to={`/${type}s/${uid}`.toLowerCase()}>
                    <SquareImage title={title} image={image} />
                    <Typography>{title}</Typography>
                </LinkShowHide>
            </Flipped>{' '}
            {isVisible && dashboardItem.__typename === 'ContentfulPodcast' && (
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
