import { DashboardItem, DashboardItemInfo } from './DashboardItem.style'
import { IconButton, Typography } from '@material-ui/core'

import { ContentModel } from '~/cms/models'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'

type ViewProps = {
    model: ContentModel
}

export default ({ model }: ViewProps) => {
    return (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <DashboardItem widthMultiplier={model.getDashboardWidth()}>
                    <Link to={model.getDetailUrl()}>{model.getDashboardComponent()}</Link>
                    <DashboardItemInfo>
                        {model.getDashboardInfoComponent()}
                        {model.isPlayableFromDashboard && (
                            <IconButton
                                onClick={() => {
                                    setSelectedMedia(model.content)
                                }}
                            >
                                <PlayArrow />
                            </IconButton>
                        )}
                    </DashboardItemInfo>
                </DashboardItem>
            )}
        </SelectedMediaContext.Consumer>
    )
}
