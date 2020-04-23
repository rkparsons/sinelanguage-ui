import { ContentModel } from './ContentModel'
import { Event } from '../cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'

export class EventModel extends ContentModel {
    event: Event

    constructor(event: Event) {
        super(event)
        this.event = event
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography>{this.event.title}</Typography>
        </>
    )
    getListRowTitle = () => this.event.title
    getDetailUrl = () => `/events/${this.event.uid}`.toLowerCase()
}
