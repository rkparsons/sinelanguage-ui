import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'

import React from 'react'
import { Visualisation } from './Visualizer.style'

type VisualiserProps = {
    audioData: Uint8Array
    isVisible: boolean
}

export default ({ audioData, isVisible }: VisualiserProps) => (
    <Visualisation isVisible={isVisible}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={Array.from(audioData).map((value, index) => ({
                    x: index,
                    y: value - 128,
                    y2: 128 - value,
                }))}
            >
                <YAxis type="number" domain={[-128, 128]} hide />
                <Line type="monotone" dataKey="y2" stroke="#f7aec2" strokeWidth={2.5} />
                <Line type="monotone" dataKey="y" stroke={'#a1cbdd'} strokeWidth={2.5} />
            </LineChart>
        </ResponsiveContainer>
    </Visualisation>
)
