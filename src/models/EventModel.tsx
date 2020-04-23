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
    getListRowTitle = () => this.event.title
    getDetailUrl = () => `/events/${this.event.uid}`.toLowerCase()
}
