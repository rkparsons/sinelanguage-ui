import React, { ReactNode, useEffect, useState } from 'react'

import Cookies from 'universal-cookie'
import View from './Layout.view'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default ({ children }: { children: ReactNode }) => {
    // todo: extract withDarkMode hook
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(new Cookies().get('aa') === 'true')

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return (
        <View
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isAnalyticsEnabled={isAnalyticsEnabled}
            setIsAnalyticsEnabled={setIsAnalyticsEnabled}
            children={children}
        />
    )
}
