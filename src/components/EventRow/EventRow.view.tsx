import { Date } from './EventRow.style'
import { Event } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { date, title } = event

    return (
        <Typography variant="h3">
            <Date>{moment(date).format('MMM. DD, YYYY')}</Date>
            {title}
        </Typography>
    )
}
