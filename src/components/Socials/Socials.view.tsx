import { Box, Grid, Typography } from '@material-ui/core'

import IconLink from './IconLink'
import React from 'react'
import { Social } from '~/constants/social'

type ViewProps = {
    urls: string[]
}

export default ({ urls }: ViewProps) => {
    const soundCloudIndex = urls.findIndex((x) => x.includes(Social.SOUNDCLOUD))

    if (soundCloudIndex > -1) {
        urls.push(urls.splice(soundCloudIndex, 1)[0])
    }

    return (
        <Grid container>
            {urls.map((url, index) => (
                <Grid item key={index}>
                    <Typography variant="h3">
                        <Box paddingRight="16px">
                            <IconLink url={url} />
                        </Box>
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
