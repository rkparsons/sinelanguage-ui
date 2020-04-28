import { Event } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => (
    <Typography variant="h3">{event.title.toUpperCase()}</Typography>
)
