import React, { useEffect, useRef, useState } from 'react'

import Visualizer from '../Visualizer'

type ViewProps = {
    audio: HTMLAudioElement
    isActive: boolean
}

export default ({ audio, isActive }: ViewProps) => {
    const rafId = useRef(0)
    const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0))
    const analyser = useRef<AnalyserNode>()

    useEffect(() => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        analyser.current = audioContext.createAnalyser()
        const source = audioContext.createMediaElementSource(audio)
        source.connect(analyser.current)
        source.connect(audioContext.destination)
        rafId.current = requestAnimationFrame(tick)

        return () => {
            console.log('disposing')
            cancelAnimationFrame(rafId.current)
            analyser.current?.disconnect()
            source.disconnect()
        }
    }, [])

    function tick() {
        if (analyser.current) {
            const dataArray = new Uint8Array(analyser.current.frequencyBinCount)
            analyser.current.getByteTimeDomainData(dataArray)
            setAudioData(dataArray)
            rafId.current = requestAnimationFrame(tick)
        }
    }

    return <Visualizer audioData={audioData} isActive={isActive} />
}
