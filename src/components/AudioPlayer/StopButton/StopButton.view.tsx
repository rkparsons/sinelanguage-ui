import { Close } from '@material-ui/icons'
import IconButton from '~/components/IconButton'
import React from 'react'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const { stopMedia } = useAudioContext()

    return <IconButton icon={<Close />} onClick={stopMedia} isLight={true} />
}
