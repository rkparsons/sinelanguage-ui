import { ContentModel } from '~/cms/models'
import DashboardItem from '~/components/DashboardItem'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import React from 'react'
import useDashboardItems from '~/hooks/useDashboardItems'

export default () => {
    const models = useDashboardItems()

    return (
        <>
            <Head title="News" />
            <Grid container>
                {models.map((model, index) => (
                    <Grid item key={index}>
                        <DashboardItem model={model} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
