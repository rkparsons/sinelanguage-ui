import Brightness2Icon from '@material-ui/icons/Brightness2'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import { IconButton } from '@material-ui/core'
import React from 'react'

// todo: use type or interface consistently
interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Brightness2Icon /> : <Brightness5Icon />}
        </IconButton>
    )
}
