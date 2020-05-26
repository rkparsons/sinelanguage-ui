import { useEffect, useRef } from 'react'

export default (callback: (dt: number) => void, isActive: boolean) => {
    const requestRef = useRef<number>()
    const previousTimeRef = useRef<number>()

    function animate(time: number) {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current
            callback(deltaTime)
        }
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animate)
    }

    function dispose() {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current)
        }
    }

    useEffect(() => {
        if (isActive) {
            requestRef.current = requestAnimationFrame(animate)
        } else {
            dispose()
        }

        return dispose
    }, [isActive])
}
