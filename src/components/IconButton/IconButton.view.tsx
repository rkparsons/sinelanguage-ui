import { Product, Release } from '~/cms/types'
import React, { ReactNode, RefObject } from 'react'
import { getDescription, getImage, getPrice, isPhysicalFormat } from '~/utils/product'

import { Button } from './IconButton.style'
import { apiProductsUrl } from 'env-variables'
import { getUrl } from '~/utils/content'

// todo: create separate component from icon button for buy button
type ViewProps = {
    buttonRef?: RefObject<HTMLButtonElement>
    label?: ReactNode
    onClick(): void
    isLight: boolean
    isDisabled?: boolean
    product?: Product
    release?: Release
    className?: string
    disabledOpacity?: number
    isInactiveShadow?: boolean
}

export default ({
    buttonRef,
    label,
    onClick,
    isLight,
    isDisabled = false,
    product,
    release,
    className = '',
    disabledOpacity = 0.5,
    isInactiveShadow = true,
}: ViewProps) => (
    <Button
        ref={buttonRef}
        onClick={() => !isDisabled && onClick()}
        isLight={isLight}
        isDisabled={isDisabled}
        disabledOpacity={disabledOpacity}
        isInactiveShadow={isInactiveShadow}
        className={className}
        data-item-id={product?.title}
        data-item-price={product ? getPrice(product) : ''}
        data-item-url={apiProductsUrl}
        data-item-name={product?.title}
        data-item-description={product ? getDescription(product) : ''}
        data-item-image={release && product ? getImage(release, product) : ''}
        data-item-file-guid={product?.fileGUID}
        data-item-shippable={product ? isPhysicalFormat(product) : ''}
    >
        {label}
    </Button>
)
