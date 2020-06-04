import { Grid, Hidden, Typography } from '@material-ui/core'

import { Date } from './EventRow.style'
import { Event } from '~/cms/types'
import React from 'react'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { date, title, artists } = event

    return (
        <>
            <Typography variant="h3">
                <Date>{moment(date).format('MMM. DD, YYYY')}</Date>
                <Hidden smDown>
                    {title} – {artists.join(', ')}
                </Hidden>
            </Typography>
            <Hidden mdUp>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h3">{artists.join(', ')}</Typography>
            </Hidden>
        </>
    )
}
