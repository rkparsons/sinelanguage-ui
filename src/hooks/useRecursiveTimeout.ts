import { useEffect, useRef } from 'react'

export default (callback: () => void, delay = 1000) => {
    const callbackRef = useRef<() => void>(callback)

    useEffect(() => {
        callbackRef.current = callback
    })

    useEffect(() => {
        const tick = () => {
            callbackRef.current()
            setTimeout(tick, delay)
        }

        const timer = setTimeout(tick, delay)

        return () => clearTimeout(timer)
    }, [delay])
}
