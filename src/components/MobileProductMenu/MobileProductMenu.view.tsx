import { Blur, Popover, Shadow } from './MobileProductMenu.style'
import { Product, Release } from '~/cms/types'
import React, { useEffect, useRef, useState } from 'react'
import { getDescription, getImage, getPrice, isPhysicalFormat } from '~/utils/product'

import IconButton from '~/components/IconButton'
import ReleaseProducts from '~/components/ReleaseProducts'
import { Typography } from '@material-ui/core'
import { Unicode } from '~/constants/unicode'
import { getUrl } from '~/utils/content'
import { isIOS } from 'react-device-detect'
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
    const [popoverTrigger, setPopoverTrigger] = useState<HTMLButtonElement>()
    const popoverTriggerRef = useRef<HTMLButtonElement>(null)
    const isAnyProductAvailable = products.find(
        (product) => isPhysicalFormat(product) || product.fileGUID
    )
    const isInBag =
        products &&
        cart.items.find((cartItem) => products.map((x) => x.title).includes(cartItem.id)) !==
            undefined

    useEffect(() => {
        return enableScroll
    }, [])

    const blockScroll = () => {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        document.ontouchmove = function (e) {
            e.preventDefault()
        }
    }

    const enableScroll = () => {
        document.body.style.overflow = 'visible'
        document.documentElement.style.overflow = 'visible'
        document.ontouchmove = function (e) {
            return true
        }
    }

    const handleClick = () => {
        if (popoverTriggerRef.current) {
            setPopoverTrigger(popoverTriggerRef.current)
            blockScroll()
        }
    }

    const handleClose = () => {
        setPopoverTrigger(undefined)
        enableScroll()
    }

    if (!isAnyProductAvailable) {
        return <></>
    }

    return (
        <>
            <IconButton
                buttonRef={popoverTriggerRef}
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
            <Popover
                open={Boolean(popoverTrigger)}
                anchorEl={popoverTrigger}
                onClose={handleClose}
                elevation={3}
                transitionDuration={isIOS ? 'auto' : 0}
            >
                <Shadow elevation={3}>
                    <ReleaseProducts
                        release={release}
                        products={products}
                        isLarge={isLarge}
                        isLight={false}
                        isDescription={false}
                        onCheckoutClick={handleClose}
                    />
                </Shadow>
                <Blur />
            </Popover>
        </>
    )
}
