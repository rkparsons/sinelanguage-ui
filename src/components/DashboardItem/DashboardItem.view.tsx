import { Button, Grid, Icon, Typography } from '@material-ui/core'
import { DashboardItem, DashboardItemInfo } from './DashboardItem.style'
import { PlayArrow, ShoppingCart } from '@material-ui/icons'

import { ContentModel } from '~/cms/models'
import IconButton from '~/components/IconButton'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
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
                            <Grid container spacing={2}>
                                <Grid item xs={1}></Grid>
                                <Grid item>
                                    <IconButton
                                        label="PLAY"
                                        icon={<PlayArrow />}
                                        onClick={() => {
                                            setSelectedMedia(model.content)
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        label="BUY"
                                        icon={<ShoppingCart />}
                                        onClick={() => console.log('buy')}
                                    />
                                </Grid>
                            </Grid>
                        )}
                    </DashboardItemInfo>
                </DashboardItem>
            )}
        </SelectedMediaContext.Consumer>
    )
}
