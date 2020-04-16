import React, { memo, useEffect, useRef } from 'react'

type ViewProps = {
    src: string
    startTimeMs: number
    onTimeUpdate(time: number): void
    isPlaying: boolean
}

export default memo(({ src, startTimeMs, onTimeUpdate, isPlaying }: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = startTimeMs / 1000.0
        }
    }, [startTimeMs, audioRef.current])

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            onTimeUpdate(audioRef.current.currentTime * 1000)
        }
    }

    return <audio ref={audioRef} src={src} preload="auto" onTimeUpdate={handleTimeUpdate}></audio>
})
