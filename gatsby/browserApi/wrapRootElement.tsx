import { PluginOptions, WrapRootElementBrowserArgs } from 'gatsby'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { silentAuth } from '../../src/utils/auth'

// todo: strip out auth code
const SessionCheck = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)

    const handleCheckSession = useCallback(() => {
        setIsLoading(false)
    }, [setIsLoading])

    useEffect(() => {
        silentAuth(handleCheckSession)
    }, [])

    return <>{!isLoading && children}</>
}

export const wrapRootElement = (args: WrapRootElementBrowserArgs, options: PluginOptions) => {
    return <SessionCheck>{args.element}</SessionCheck>
}
