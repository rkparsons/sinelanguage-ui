import { ContentModel } from './ContentModel'
import { Event } from '../cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'
import Video from '~/components/Video'

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
    getDashboardComponent = () => <Video src={this.event.video.file.url} />
    getListComponent = () => <Typography variant="h3">{this.event.title}</Typography>
    getDetailUrl = () => `/events/${this.event.uid}`.toLowerCase()
}
