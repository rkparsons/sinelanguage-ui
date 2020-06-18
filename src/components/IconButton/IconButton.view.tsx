import { Box, Grid } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { ReactNode, RefObject } from 'react'
import { getDescription, getImage, getPrice } from '~/utils/product'

import { Button } from './IconButton.style'
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
}: ViewProps) => (
    <Button
        ref={buttonRef}
        onClick={() => !isDisabled && onClick()}
        isLight={isLight}
        isDisabled={isDisabled}
        disabledOpacity={disabledOpacity}
        className={className}
        data-item-id={product?.title}
        data-item-price={product ? getPrice(product) : ''}
        data-item-url={release ? getUrl(release) : ''}
        data-item-name={product?.title}
        data-item-description={product ? getDescription(product) : ''}
        data-item-image={release && product ? getImage(release, product) : ''}
        data-item-file-guid={product?.fileGUID}
        data-item-weight={product?.weightGrams}
    >
        {label}
    </Button>
)
