import React, { ReactNode } from 'react'

import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import { Typography } from '@material-ui/core'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    text: string
    icon?: ReactNode
    isWithCount: boolean
}

export default ({ text, icon, isWithCount }: ViewProps) => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout">
            <IconButton
                label={
                    <Typography variant={'h3'}>
                        {text} {isWithCount && cart.items.length ? `(${cart.items.length})` : ``}
                    </Typography>
                }
                icon={icon}
                onClick={() => {}}
                isLight={true}
            />
        </CheckoutButton>
    )
}
