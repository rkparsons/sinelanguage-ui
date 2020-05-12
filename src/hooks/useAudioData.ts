import { RefObject, useEffect, useRef, useState } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>) => {
    const rafId = useRef(0)
    const analyser = useRef<AnalyserNode>()
    const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0))

    useEffect(() => {
        if (!audioRef.current) {
            return
        }

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        analyser.current = audioContext.createAnalyser()
        const source = audioContext.createMediaElementSource(audioRef.current)
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

    return audioData
}
