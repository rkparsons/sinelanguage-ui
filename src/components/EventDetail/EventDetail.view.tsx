import { Event } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => (
    <>
        <Typography variant="h3">{event.title.toUpperCase()}</Typography>
        <Typography variant="h3">
            {moment(event.date).format(`ddd, DD MMM YYYY`).toUpperCase()}
        </Typography>
    </>
)
