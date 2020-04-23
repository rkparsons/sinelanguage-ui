import { DashboardItem, DashboardItemInfo } from './DashboardItem.style'

import BagIcon from '~/components/BagIcon'
import { ContentModel } from '~/models/ContentModel'
import { Grid } from '@material-ui/core'
import IconButton from '~/components/IconButton'
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
                            <Grid container spacing={2}>
                                <Grid item xs={1}></Grid>
                                <Grid item>
                                    <IconButton
                                        label="PLAY"
                                        icon={<PlayArrow fontSize="small" />}
                                        onClick={() => {
                                            setSelectedMedia(model.content)
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        label="BUY"
                                        icon={<BagIcon />}
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
