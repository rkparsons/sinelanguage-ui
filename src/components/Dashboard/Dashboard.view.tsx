import { ContentModel } from '~/cms/models'
import DashboardItem from '~/components/DashboardItem'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import React from 'react'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
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
