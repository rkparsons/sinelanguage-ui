import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [position, setPosition] = useState({ mouseX: 0, mouseY: 0 })

    useEffect(() => {
        const setFromEvent = (e: any) =>
            setPosition({
                mouseX: e.clientX,
                mouseY: e.clientY,
            })
        window.addEventListener('mousemove', setFromEvent)
        return () => {
            window.removeEventListener('mousemove', setFromEvent)
        }
    }, [])

    return position
}
