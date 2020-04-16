import React from 'react'
import { Typography } from '@material-ui/core'

type Viewprops = {
    title: string
    timestamp: string
}
export default ({ title, timestamp }: Viewprops) => {
    return (
        <>
            <Typography>{title}</Typography>
            <Typography>{timestamp}</Typography>
        </>
    )
}
