import React, { useEffect, useState } from 'react'

import View from './Layout.view'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default ({ children }) => {
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return <View isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} children={children} />
}
