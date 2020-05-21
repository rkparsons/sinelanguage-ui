import { AddLabel } from './BuyButton.style'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    id: string
    price: number
    url: string
    name: string
    description: string
    imageUrl: string
    isLarge: boolean
    isLight: boolean
}

export default ({ id, price, url, name, description, imageUrl, isLarge, isLight }: ViewProps) => {
    const { cart } = useCartContext()

    if (cart.items.find((cartItem) => cartItem.id === id)) {
        return (
            <Typography variant={isLarge ? 'h3' : 'body1'} color="secondary">
                ADDED
            </Typography>
        )
    }

    return (
        <IconButton
            label={
                <Typography variant={isLarge ? 'h3' : 'body1'}>
                    <AddLabel price={`£${price.toFixed(2)}`} />
                </Typography>
            }
            onClick={() => {}}
            isLight={isLight}
            cartItem={{
                id,
                price,
                url,
                name,
                description,
                imageUrl,
            }}
            className="snipcart-add-item"
        />
    )
}
