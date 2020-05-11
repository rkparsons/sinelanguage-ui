import { Event } from '~/cms/types'
import Padding from '~/components/Padding'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => (
    <Padding left right>
        <Typography variant="h3">{event.title}</Typography>
    </Padding>
)
