import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'

import Fade from '~/components/Fade'
import React from 'react'
import { Visualisation } from './AudioVisualizer.style'
import { Zoom } from '@material-ui/core'

type ViewProps = {
    audioData: number[]
    isActive: boolean
}

export default ({ audioData, isActive }: ViewProps) => (
    <Fade isVisible={isActive} durationMs={500}>
        <Zoom in={isActive} timeout={1500}>
            <Visualisation>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={audioData.map((value, index) => ({
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
                            opacity={0.2 + (0.8 * Math.max(...audioData)) / 128.0}
                            strokeWidth={2 + (1.5 * Math.max(...audioData)) / 128.0}
                        />
                        <Line
                            type="monotone"
                            dataKey="y"
                            stroke={'#a1cbdd'}
                            strokeWidth={2 + (1.5 * Math.max(...audioData)) / 128.0}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Visualisation>
        </Zoom>
    </Fade>
)
