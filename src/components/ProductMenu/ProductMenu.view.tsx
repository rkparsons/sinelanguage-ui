import { Menu, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import IconButton from '~/components/IconButton'
import { MenuItem } from '@material-ui/core'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type Props = {
    release: Release
}

export default ({ release }: Props) => {
    const { artist, products, image, title } = release
    const [menuTrigger, setMenuTrigger] = useState<HTMLButtonElement>()
    const menuTriggerRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        if (menuTriggerRef.current) {
            setMenuTrigger(menuTriggerRef.current)
        }
    }

    const handleClose = () => {
        setMenuTrigger(undefined)
    }

    return (
        <>
            <IconButton
                buttonRef={menuTriggerRef}
                label={<Typography variant="body1">BUY</Typography>}
                icon={<BagIcon isLarge={false} />}
                onClick={handleClick}
                isLight={false}
            />
            <Menu
                id="customized-menu"
                anchorEl={menuTrigger}
                keepMounted
                open={Boolean(menuTrigger)}
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
                        data-item-description={product.description.description}
                        data-item-image={image.fluid.src}
                        onClick={handleClose}
                    >
                        {product.format} (£{product.price.toFixed(2)})
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
