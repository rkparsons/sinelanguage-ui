import { Artist, Release } from '~/cms/types'

import { Flipped } from 'react-flip-toolkit'
import { LinkShowHide } from './DashboardItem.style'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'

type ViewProps = {
    dashboardItem: Artist | Release
    filter?: string
}

export default ({ dashboardItem, filter }: ViewProps) => {
    const { __typename, title, uid, image } = dashboardItem
    const type = __typename.replace('Contentful', '').toLowerCase()

    return (
        <Flipped flipId={uid} stagger opacity translate={false}>
            <LinkShowHide
                isVisible={!filter || `${type}s` === filter}
                to={`/${type}s/${uid}`.toLowerCase()}
            >
                <SquareImage title={title} image={image} />
                <Typography>{title}</Typography>
            </LinkShowHide>
        </Flipped>
    )
}
