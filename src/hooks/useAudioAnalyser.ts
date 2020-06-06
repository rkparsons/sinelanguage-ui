import { RefObject, useEffect, useRef } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>, isActive: boolean) => {
    const audioContext = useRef<AudioContext>()
    const audioAnalyser = useRef<AnalyserNode>()
    const audioSource = useRef<MediaElementAudioSourceNode>()
    const isWindow = typeof window !== `undefined`
    const isAudioContext = isWindow && ('AudioContext' in window || 'webkitAudioContext' in window)
    const userInteractionEvents = ['touchstart', 'click', 'mousemove']

    useEffect(() => {
        if (isActive && audioRef.current && isAudioContext && !audioSource.current) {
            createUserInteractionListeners()
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

    function initAudioContext(e: Event) {
        if (!audioContext.current) {
            audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()
            console.log('1. creating audio context', audioContext.current.state)
        } else if (audioRef.current) {
            audioContext.current.resume()
            console.log('2. resuming audio context', audioContext.current.state)
            audioAnalyser.current = audioContext.current.createAnalyser()
            audioSource.current = audioContext.current.createMediaElementSource(audioRef.current)
            audioSource.current.connect(audioAnalyser.current)
            audioSource.current.connect(audioContext.current.destination)
            removeUserInteractionListeners()
        }
    }

    function createUserInteractionListeners() {
        console.log('createUserInteractionListeners')
        userInteractionEvents.forEach((event) => document.addEventListener(event, initAudioContext))
    }

    function removeUserInteractionListeners() {
        console.log('removeUserInteractionListeners')
        userInteractionEvents.forEach((event) =>
            document.removeEventListener(event, initAudioContext)
        )
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
