import { Album, GraphicEq, Radio } from '@material-ui/icons'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core'

import { IconButton } from '@material-ui/core'
import React from 'react'

type Props = {
    triggerElement: HTMLButtonElement | undefined
    closeHandler: () => void
}

export default ({ triggerElement, closeHandler }: Props) => {
    const handleClose = () => {
        closeHandler()
    }

    return (
        <Menu
            id="customized-menu"
            anchorEl={triggerElement}
            keepMounted
            open={Boolean(triggerElement)}
            onClose={handleClose}
        >
            <MenuItem component="button">
                <ListItemText primary='12" Vinyl (£15.00)' />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="Cassette (£8.00)" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="Digital (£5.00)" />
            </MenuItem>
        </Menu>
    )
}
