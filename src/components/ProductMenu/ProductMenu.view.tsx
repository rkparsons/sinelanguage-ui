import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type Props = {
    release: Release
    triggerElement: HTMLButtonElement | undefined
    closeHandler: () => void
}

export default ({ release, triggerElement, closeHandler }: Props) => {
    const { artist, products, image, title } = release

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
                <MenuItem
                    key={index}
                    component="button"
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={getUrl(release)}
                    data-item-name={product.title}
                    data-item-description=""
                    data-item-image={image.fluid.src}
                    onClick={handleClose}
                >
                    {product.format} (£{product.price.toFixed(2)})
                </MenuItem>
            ))}
        </Menu>
    )
}
