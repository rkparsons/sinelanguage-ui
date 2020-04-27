import { Detail, Image, Info } from './ContentDetail.style'
import { Grid, Typography } from '@material-ui/core'

import { ContentModel } from '~/models'
import Head from '~/components/Head'
import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import { Podcast } from '~/cms/types'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    model: ContentModel
}

export default ({ model }: ViewProps) => (
    <SelectedMediaContext.Consumer>
        {({ setSelectedMedia }) => (
            <>
                {model.getSEOComponent()}
                <Detail container>
                    <Grid item xs={6}>
                        <Image container justify="center" alignItems="center">
                            <Grid item xs={7}>
                                {model.getDashboardComponent()}
                            </Grid>
                        </Image>
                    </Grid>
                    <Grid item xs={6}>
                        <Info>{model.getDetailComponent()}</Info>
                    </Grid>
                </Detail>
            </>
        )}
    </SelectedMediaContext.Consumer>
)
