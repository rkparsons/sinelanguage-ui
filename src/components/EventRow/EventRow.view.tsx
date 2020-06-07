import { Grid, Typography } from '@material-ui/core'

import { Date } from './EventRow.style'
import Desktop from '~/components/Desktop'
import { Event } from '~/cms/types'
import Mobile from '~/components/Mobile'
import React from 'react'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { date, title, artists, location } = event

    return (
        <Grid container>
            <Grid item xs={12} md={9}>
                <Typography variant="h3">
                    <Date>{moment(date).format('MMM. DD, YYYY')}</Date>
                    <Desktop>
                        {title} – {artists.join(', ')}
                    </Desktop>
                </Typography>
                <Mobile>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h3">{artists.join(', ')}</Typography>
                </Mobile>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography variant="h3">{location}</Typography>
            </Grid>
        </Grid>
    )
}
