import { Area, AreaChart, Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'
import React, { useEffect, useRef, useState } from 'react'
import { SVG, Visualisation } from './VisualizerRechartsArea.style'

type VisualiserProps = {
    audioData: Uint8Array
}

export default ({ audioData }: VisualiserProps) => {
    const svg = useRef<SVGSVGElement>(null)

    return (
        <Visualisation>
            <ResponsiveContainer width="100%" height="100%">
                {/* <LineChart
                    data={Array.from(audioData).map((value, index) => ({
                        x: index,
                        y: value - 128,
                    }))}
                >
                    <YAxis type="number" domain={[-128, 128]} hide />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                </LineChart> */}
                <AreaChart
                    data={Array.from(audioData).map((value, index) => ({
                        x: index,
                        y: value - 128,
                    }))}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <YAxis type="number" domain={[-128, 128]} hide />
                    <Area
                        type="monotone"
                        dataKey="y"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Visualisation>
    )
}
