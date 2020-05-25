import { Close } from '@material-ui/icons'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const { stopMedia } = useAudioContext()

    return (
        <IconButton
            label={<Typography variant="h3">x</Typography>}
            onClick={stopMedia}
            isLight={true}
        />
    )
}
