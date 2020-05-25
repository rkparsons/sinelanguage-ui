import { Close } from '@material-ui/icons'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import { Unicode } from '~/constants/unicode'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const { stopMedia } = useAudioContext()

    return (
        <IconButton
            label={<Typography variant="h3">{Unicode.CLOSE}</Typography>}
            onClick={stopMedia}
            isLight={true}
        />
    )
}
