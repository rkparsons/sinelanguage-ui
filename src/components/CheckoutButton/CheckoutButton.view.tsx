import React, { ReactNode } from 'react'

import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import { Typography } from '@material-ui/core'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    text: string
    icon?: ReactNode
    isWithCount: boolean
    isLight: boolean
    isLarge: boolean
}

export default ({ text, icon, isWithCount, isLight, isLarge }: ViewProps) => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout">
            <IconButton
                label={
                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                        {text} {isWithCount && cart.items.length ? `(${cart.items.length})` : ``}
                    </Typography>
                }
                icon={icon}
                onClick={() => {}}
                isLight={isLight}
            />
        </CheckoutButton>
    )
}
