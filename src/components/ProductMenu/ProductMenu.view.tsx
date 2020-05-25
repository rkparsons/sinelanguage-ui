import { Product, Release } from '~/cms/types'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import { BagIconContainer } from './ProductMenu.style'
import IconButton from '~/components/IconButton'
import { Popover } from './ProductMenu.style'
import ReleaseProducts from '~/components/ReleaseProducts'
import { Typography } from '@material-ui/core'
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
    const { cart } = useCartContext()
    const [popoverTrigger, setPopoverTrigger] = useState<HTMLButtonElement>()
    const popoverTriggerRef = useRef<HTMLButtonElement>(null)

    // todo: refactor cart check into utility method
    const isInBag =
        products &&
        cart.items.find((cartItem) => products.map((x) => x.id).includes(cartItem.id)) !== undefined

    const handleClick = () => {
        if (popoverTriggerRef.current) {
            setPopoverTrigger(popoverTriggerRef.current)
        }
    }

    const handleClose = () => {
        setPopoverTrigger(undefined)
    }

    return (
        <>
            <IconButton
                buttonRef={popoverTriggerRef}
                icon={
                    <BagIconContainer isInBag={indicateWhenInBag && isInBag}>
                        <BagIcon isLarge={isLarge} isTranslateY={text !== undefined} />
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
            {products.map((product, index) => (
                <button
                    key={index}
                    hidden
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={getUrl(release)}
                    data-item-name={product.title}
                    data-item-description={product.description.description}
                    data-item-image={release.image.fluid.src}
                    data-item-file-guid={product.fileGUID}
                >
                    {product.format}
                </button>
            ))}
            <Popover open={Boolean(popoverTrigger)} anchorEl={popoverTrigger} onClose={handleClose}>
                <ReleaseProducts
                    release={release}
                    products={products}
                    isLarge={isLarge}
                    isLight={false}
                    isDescription={false}
                    onCheckoutClick={handleClose}
                />
            </Popover>
        </>
    )
}
