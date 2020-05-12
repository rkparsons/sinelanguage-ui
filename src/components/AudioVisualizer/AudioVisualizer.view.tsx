import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'

import Fade from '~/components/Fade'
import React from 'react'
import { Visualisation } from './AudioVisualizer.style'
import { Zoom } from '@material-ui/core'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    isActive: boolean
}

export default ({ isActive }: ViewProps) => {
    const { audioData } = useAudioContext()
    const getSamples = () => Array.from(audioData).map((y) => y - 128)

    return (
        <Fade isVisible={isActive} durationMs={500}>
            <Zoom in={isActive} timeout={1500}>
                <Visualisation>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={getSamples().map((value, index) => ({
                                x: index,
                                y: value,
                                y2: -value,
                            }))}
                        >
                            <YAxis type="number" domain={[-128, 128]} hide />
                            <Line
                                type="monotone"
                                dataKey="y2"
                                stroke="#f7aec2"
                                opacity={0.2 + (0.8 * Math.max(...getSamples())) / 128.0}
                                strokeWidth={2 + (1.5 * Math.max(...getSamples())) / 128.0}
                            />
                            <Line
                                type="monotone"
                                dataKey="y"
                                stroke={'#a1cbdd'}
                                strokeWidth={2 + (1.5 * Math.max(...getSamples())) / 128.0}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Visualisation>
            </Zoom>
        </Fade>
    )
}
