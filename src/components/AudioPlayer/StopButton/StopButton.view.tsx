import { Close } from '@material-ui/icons'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const { stopMedia } = useAudioContext()

    // todo: replace all unicode chars with enum
    return (
        <IconButton
            label={<Typography variant="h3">{`\u00D7`}</Typography>}
            onClick={stopMedia}
            isLight={true}
        />
    )
}
