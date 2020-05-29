import { Box, Grid } from '@material-ui/core'
import React, { ReactNode, RefObject } from 'react'

import { Button } from './IconButton.style'
import { CartItem } from '~/types/snipcart'

type ViewProps = {
    buttonRef?: RefObject<HTMLButtonElement>
    label?: ReactNode
    onClick(): void
    isLight: boolean
    isDisabled?: boolean
    cartItem?: CartItem
    className?: string
    disabledOpacity?: number
}

export default ({
    buttonRef,
    label,
    onClick,
    isLight,
    isDisabled = false,
    cartItem,
    className = '',
    disabledOpacity = 0.3,
}: ViewProps) => (
    <Button
        ref={buttonRef}
        onClick={() => !isDisabled && onClick()}
        isLight={isLight}
        isDisabled={isDisabled}
        disabledOpacity={disabledOpacity}
        className={className}
        data-item-id={cartItem?.id}
        data-item-price={cartItem?.price}
        data-item-url={cartItem?.url}
        data-item-name={cartItem?.name}
        data-item-description={cartItem?.description}
        data-item-image={cartItem?.imageUrl}
        data-item-file-guid={cartItem?.fileGUID}
    >
        {label}
    </Button>
)
