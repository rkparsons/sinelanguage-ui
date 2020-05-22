import React, { ReactNode } from 'react'

import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import { Typography } from '@material-ui/core'
import Whitespace from '~/components/Whitespace'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    text: string
    icon?: ReactNode
    isWithCount: boolean
    isLight: boolean
    isLarge: boolean
    onClick?: () => void
}

export default ({ text, icon, isWithCount, isLight, isLarge, onClick = () => {} }: ViewProps) => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout">
            <IconButton
                label={
                    <Whitespace value="nowrap">
                        <Typography variant={isLarge ? 'h3' : 'body1'}>
                            {text}{' '}
                            {isWithCount && cart.items.length ? `(${cart.items.length})` : ``}
                        </Typography>
                    </Whitespace>
                }
                icon={icon}
                onClick={onClick}
                isLight={isLight}
            />
        </CheckoutButton>
    )
}
