import { RefObject, useEffect, useRef } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>) => {
    const audioAnalyser = useRef<AnalyserNode>()
    const audioSource = useRef<MediaElementAudioSourceNode>()
    const isWindow = typeof window !== `undefined`
    const isAudioContext = isWindow && ('AudioContext' in window || 'webkitAudioContext' in window)

    useEffect(() => {
        window.addEventListener('keydown', initialiseAudioAnalyser)
        window.addEventListener('mousedown', initialiseAudioAnalyser)
        window.addEventListener('touchstart', initialiseAudioAnalyser)

        return function dispose() {
            audioAnalyser.current?.disconnect()
            audioSource.current?.disconnect()
            audioAnalyser.current = undefined
            audioSource.current = undefined
        }
    }, [])

    function initialiseAudioAnalyser() {
        if (audioRef.current && isAudioContext && !audioSource.current) {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
            audioAnalyser.current = audioContext.createAnalyser()
            audioSource.current = audioContext.createMediaElementSource(audioRef.current)
            audioSource.current.connect(audioAnalyser.current)
            audioSource.current.connect(audioContext.destination)

            removeInteractionListeners()
        }
    }

    function removeInteractionListeners() {
        window.removeEventListener('keydown', initialiseAudioAnalyser)
        window.removeEventListener('mousedown', initialiseAudioAnalyser)
        window.removeEventListener('touchstart', initialiseAudioAnalyser)
    }

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
