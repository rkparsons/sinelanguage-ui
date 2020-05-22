import { Menu, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import IconButton from '~/components/IconButton'
import { MenuItem } from '@material-ui/core'
import ReleaseProducts from '~/components/ReleaseProducts'
import { getUrl } from '~/utils/content'
import useCartContext from '~/hooks/useCartContext'

type Props = {
    release: Release
    products: Product[]
    isLarge: boolean
    isLight: boolean
    text?: string
}

export default ({ release, products, isLarge, isLight, text }: Props) => {
    const { cart } = useCartContext()
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
                icon={<BagIcon isLarge={isLarge} />}
                label={
                    text ? (
                        <Typography variant={isLarge ? 'h3' : 'body1'}>{text}</Typography>
                    ) : undefined
                }
                onClick={handleClick}
                isLight={isLight}
            />
            <Menu
                id="customized-menu"
                anchorEl={menuTrigger}
                keepMounted
                open={Boolean(menuTrigger)}
                onClose={handleClose}
            >
                <ReleaseProducts release={release} isLarge={isLarge} isLight={isLight} />
            </Menu>
        </>
    )
}
