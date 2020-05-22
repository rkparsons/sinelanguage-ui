import { Product, Release } from '~/cms/types'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import { BagIconContainer } from './ProductMenu.style'
import IconButton from '~/components/IconButton'
import { Menu } from './ProductMenu.style'
import ReleaseProducts from '~/components/ReleaseProducts'
import { Typography } from '@material-ui/core'
import useCartContext from '~/hooks/useCartContext'

type Props = {
    release: Release
    products: Product[]
    isLarge: boolean
    isLight: boolean
    text?: string
    indicateWhenInBag: boolean
}

export default ({ release, products, isLarge, isLight, text, indicateWhenInBag }: Props) => {
    const { cart } = useCartContext()
    const [menuTrigger, setMenuTrigger] = useState<HTMLButtonElement>()
    const menuTriggerRef = useRef<HTMLButtonElement>(null)

    // todo: refactor cart check into utility method
    const isInBag =
        products &&
        cart.items.find((cartItem) => products.map((x) => x.id).includes(cartItem.id)) !== undefined

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
                icon={
                    <BagIconContainer isInBag={indicateWhenInBag && isInBag}>
                        <BagIcon isLarge={isLarge} />
                    </BagIconContainer>
                }
                label={
                    text ? (
                        <Typography variant={isLarge ? 'h3' : 'body1'}>{text}</Typography>
                    ) : undefined
                }
                onClick={handleClick}
                isLight={isLight}
                isDisabled={!products}
            />
            <Menu
                id="customized-menu"
                anchorEl={menuTrigger}
                keepMounted
                open={Boolean(menuTrigger)}
                onClose={handleClose}
            >
                <ReleaseProducts
                    release={release}
                    products={products}
                    isLarge={isLarge}
                    isLight={false}
                    isDescription={false}
                    onCheckoutClick={handleClose}
                />
            </Menu>
        </>
    )
}
