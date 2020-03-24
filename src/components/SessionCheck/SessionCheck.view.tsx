import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { silentAuth } from '~/utils/auth'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    const [isLoading, setIsLoading] = useState(true)

    const handleCheckSession = useCallback(() => {
        setIsLoading(false)
    }, [setIsLoading])

    useEffect(() => {
        silentAuth(handleCheckSession)
    }, [])

    return <>{!isLoading && children}</>
}
