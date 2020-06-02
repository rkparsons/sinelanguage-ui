import { useEffect, useState } from 'react'

import React from 'react'
import { Slider } from '@material-ui/core'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const [volumeLevel, setVolumeLevel] = useState(1)

    const { setVolume } = useAudioContext()

    useEffect(() => {
        setVolume(volumeLevel)
    }, [volumeLevel])

    function onVolume(event: any, newValue: number | number[]) {
        setVolumeLevel(newValue as number)
    }

    return (
        <Slider
            orientation="vertical"
            value={volumeLevel}
            onChange={onVolume}
            min={0}
            max={1}
            step={0.01}
        />
    )
}
