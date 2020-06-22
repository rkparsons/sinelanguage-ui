import { Box, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import { Unicode } from '~/constants/unicode'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    text: string
    icon?: ReactNode
    isWithCount: boolean
    isLight: boolean
    isLarge: boolean
    isDisabled: boolean
    onClick?: () => void
}

export default ({
    text,
    icon,
    isWithCount,
    isLight,
    isLarge,
    isDisabled,
    onClick = () => {},
}: ViewProps) => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout">
            <IconButton
                label={
                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                        {`${text} ${
                            isWithCount && cart.items.length ? `(${cart.items.length})` : ``
                        }`}
                    </Typography>
                }
                onClick={onClick}
                isLight={isLight}
                isDisabled={isDisabled}
            />
        </CheckoutButton>
    )
}
