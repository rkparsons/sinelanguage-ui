import { DashboardItem } from '~/cms/types/dashboardItem'
import { Flipped } from 'react-flip-toolkit'
import { LinkShowHide } from './DashboardItem.style'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { Typography } from '@material-ui/core'

type ViewProps = {
    dashboardItem: DashboardItem
    filter?: string
}

export default ({ dashboardItem, filter }: ViewProps) => {
    const { type, title, uid, image } = dashboardItem

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
