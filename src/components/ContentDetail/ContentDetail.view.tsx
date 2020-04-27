import { Detail, Image, Info } from './ContentDetail.style'

import { ContentModel } from '~/models'
import { Grid } from '@material-ui/core'
import React from 'react'

type ViewProps = {
    model: ContentModel
}

export default ({ model }: ViewProps) => (
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
)
