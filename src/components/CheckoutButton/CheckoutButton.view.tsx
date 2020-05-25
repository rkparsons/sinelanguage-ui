import { Box, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    text: string
    icon?: ReactNode
    isWithCount: boolean
    isLight: boolean
    isLarge: boolean
    isVisible: boolean
    onClick?: () => void
}

export default ({
    text,
    icon,
    isWithCount,
    isLight,
    isLarge,
    isVisible,
    onClick = () => {},
}: ViewProps) => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout" isVisible={isVisible}>
            <IconButton
                label={
                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                        {text} {isWithCount && cart.items.length ? `(${cart.items.length})` : ``}
                    </Typography>
                }
                icon={icon}
                onClick={onClick}
                isLight={isLight}
            />
        </CheckoutButton>
    )
}
