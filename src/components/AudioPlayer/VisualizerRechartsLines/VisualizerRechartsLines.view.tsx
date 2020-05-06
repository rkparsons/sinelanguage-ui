import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'

import React from 'react'
import { Visualisation } from './VisualizerRechartsLines.style'

type VisualiserProps = {
    audioData: Uint8Array
}

export default ({ audioData }: VisualiserProps) => (
    <Visualisation>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={Array.from(audioData).map((value, index) => ({
                    x: index,
                    y: value - 128,
                }))}
            >
                <YAxis type="number" domain={[-128, 128]} hide />
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    </Visualisation>
)
