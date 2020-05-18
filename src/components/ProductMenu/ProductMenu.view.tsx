import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { Product } from '~/cms/types'
import React from 'react'

type Props = {
    products: Product[]
    triggerElement: HTMLButtonElement | undefined
    closeHandler: () => void
}

export default ({ products, triggerElement, closeHandler }: Props) => {
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
            {products.map((product, index) => (
                <MenuItem key={index} component="button">
                    {product.format} (£{product.price.toFixed(2)})
                </MenuItem>
            ))}
        </Menu>
    )
}
