import { Menu, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import IconButton from '~/components/IconButton'
import { MenuItem } from '@material-ui/core'
import { getUrl } from '~/utils/content'

type Props = {
    release: Release
    products: Product[]
}

export default ({ release, products }: Props) => {
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
                        data-item-image={release.image.fluid.src}
                        onClick={handleClose}
                    >
                        {product.format} (£{product.price.toFixed(2)})
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
