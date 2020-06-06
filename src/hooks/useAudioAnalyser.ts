import { RefObject, useEffect, useRef } from 'react'

export default (audioRef: RefObject<HTMLAudioElement>, isActive: boolean) => {
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
        if (isActive && audioRef.current && isAudioContext && !audioSource.current) {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
            audioAnalyser.current = audioContext.createAnalyser()
            audioSource.current = audioContext.createMediaElementSource(audioRef.current)
            audioSource.current.connect(audioAnalyser.current)
            audioSource.current.connect(audioContext.destination)

            console.log('init')

            removeUserInteractionListeners()
        }
    }

    function createUserInteractionListeners() {
        userInteractionEvents.forEach((event) => document.addEventListener(event, initAudioContext))
    }

    function removeUserInteractionListeners() {
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
