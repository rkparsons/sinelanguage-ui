import { ClickAwayListener, Grow, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { useEffect, useRef, useState } from 'react'
import { getDescription, getImage, getPrice, isPhysicalFormat } from '~/utils/product'

import Desktop from '~/components/Desktop'
import GlassPanel from '~/components/GlassPanel'
import IconButton from '~/components/IconButton'
import Mobile from '~/components/Mobile'
import { Popup } from './AltProductMenu.style'
import ReleaseProducts from '~/components/ReleaseProducts'
import { Unicode } from '~/constants/unicode'
import { getUrl } from '~/utils/content'
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
    const [isActive, setIsActive] = useState(false)
    const { cart } = useCartContext()
    const isAnyProductAvailable = products.find(
        (product) => isPhysicalFormat(product) || product.fileGUID
    )
    const isInBag =
        products &&
        cart.items.find((cartItem) => products.map((x) => x.title).includes(cartItem.id)) !==
            undefined

    const handleClick = () => {
        setIsActive(true)
    }

    const handleClose = () => {
        setIsActive(false)
    }

    if (!isAnyProductAvailable) {
        return <></>
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <IconButton
                    label={
                        <Typography
                            variant={isLarge ? 'h3' : 'body1'}
                            color={isInBag && indicateWhenInBag ? 'secondary' : 'inherit'}
                        >{`${Unicode.CART_LEFT_ALIGN} ${text ? text : ''}`}</Typography>
                    }
                    onClick={handleClick}
                    isLight={isLight}
                    isDisabled={!products}
                />
                {isActive && (
                    <ClickAwayListener onClickAway={handleClose}>
                        <Popup>
                            <GlassPanel elevation={3} borderRadius={4}>
                                <ReleaseProducts
                                    release={release}
                                    products={products}
                                    isLarge={isLarge}
                                    isLight={false}
                                    isDescription={false}
                                    onCheckoutClick={handleClose}
                                />
                            </GlassPanel>
                        </Popup>
                    </ClickAwayListener>
                )}
            </div>

            {products.map((product, index) => (
                <button
                    key={index}
                    hidden
                    className="snipcart-add-item"
                    data-item-id={product.title}
                    data-item-price={getPrice(product)}
                    data-item-url={getUrl(release)}
                    data-item-name={product.title}
                    data-item-description={getDescription(product)}
                    data-item-image={getImage(release, product)}
                    data-item-file-guid={product.fileGUID}
                    data-item-shippable={isPhysicalFormat(product)}
                >
                    {product.format}
                </button>
            ))}
        </>
    )
}
