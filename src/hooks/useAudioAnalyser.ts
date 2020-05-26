import { RefObject, useEffect, useRef } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>) => {
    const analyser = useRef<AnalyserNode>()

    useEffect(() => {
        var AudioContext = window.AudioContext || (<any>window).webkitAudioContext || false

        if (!audioRef.current || !AudioContext) {
            return
        }

        const audioContext = new AudioContext()
        analyser.current = audioContext.createAnalyser()
        const source = audioContext.createMediaElementSource(audioRef.current)
        source.connect(analyser.current)
        source.connect(audioContext.destination)

        return () => {
            analyser.current?.disconnect()
            source.disconnect()
        }
    }, [])

    function getAudioData() {
        if (!analyser.current) {
            return []
        } else {
            const dataArray = new Uint8Array(analyser.current.frequencyBinCount)
            analyser.current.getByteTimeDomainData(dataArray)
            return Array.from(dataArray).map((y) => y - 128)
        }
    }

    return getAudioData
}
