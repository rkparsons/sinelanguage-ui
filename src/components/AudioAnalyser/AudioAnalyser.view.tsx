import React, { useEffect, useRef } from 'react'

import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    audio: HTMLAudioElement
}

export default ({ audio }: ViewProps) => {
    const { setAudioData } = useAudioContext()
    const rafId = useRef(0)
    const analyser = useRef<AnalyserNode>()

    useEffect(() => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        analyser.current = audioContext.createAnalyser()
        const source = audioContext.createMediaElementSource(audio)
        source.connect(analyser.current)
        source.connect(audioContext.destination)
        rafId.current = requestAnimationFrame(tick)

        return () => {
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
    return <></>
}
