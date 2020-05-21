import BagIcon from '~/components/BagIcon'
import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import useCartContext from '~/hooks/useCartContext'

export default () => {
    const { cart } = useCartContext()

    return (
        <CheckoutButton className="snipcart-checkout">
            <IconButton
                label={
                    <Typography variant={'h3'}>
                        BAG {cart.items.length ? `(${cart.items.length})` : ``}
                    </Typography>
                }
                icon={<BagIcon isLarge={true} />}
                onClick={() => {}}
                isLight={true}
            />
        </CheckoutButton>
    )
}
