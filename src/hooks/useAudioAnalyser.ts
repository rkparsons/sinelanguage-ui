import { RefObject, useEffect, useRef } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>, isActive: boolean) => {
    const audioAnalyser = useRef<AnalyserNode>()
    const audioSource = useRef<MediaElementAudioSourceNode>()
    const isWindow = typeof window !== `undefined`
    const isAudioContext = isWindow && ('AudioContext' in window || 'webkitAudioContext' in window)

    useEffect(() => {
        if (isActive && audioRef.current && isAudioContext && !audioSource.current) {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
            audioAnalyser.current = audioContext.createAnalyser()
            audioSource.current = audioContext.createMediaElementSource(audioRef.current)
            audioSource.current.connect(audioAnalyser.current)
            audioSource.current.connect(audioContext.destination)
        }
    }, [isActive, audioRef.current, audioSource.current])

    useEffect(() => {
        return function dispose() {
            audioAnalyser.current?.disconnect()
            audioSource.current?.disconnect()
            audioAnalyser.current = undefined
            audioSource.current = undefined
        }
    }, [])

    function getAudioData() {
        if (!audioAnalyser.current) {
            return []
        } else {
            const dataArray = new Uint8Array(audioAnalyser.current.frequencyBinCount)
            audioAnalyser.current.getByteTimeDomainData(dataArray)
            return Array.from(dataArray).map((y) => y - 128)
        }
    }

    return getAudioData
}
