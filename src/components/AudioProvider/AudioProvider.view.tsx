import React, { ReactNode, useState } from 'react'

import { SelectedMedia } from '~/types/cms'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    const [selectedMedia, setSelectedMedia] = useState<SelectedMedia>()

    return (
        <SelectedMediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
            {children}
        </SelectedMediaContext.Provider>
    )
}
