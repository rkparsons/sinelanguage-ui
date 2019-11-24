import React, { ReactNode, useEffect, useState } from 'react'

import View from './Layout.view'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default ({ children }: { children: ReactNode }) => {
    // todo: extract withDarkMode hook
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return <View isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} children={children} />
}
