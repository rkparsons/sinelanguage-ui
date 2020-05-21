import { Box, Grid, Typography } from '@material-ui/core'

import BuyButton from '~/components/BuyButton'
import CheckoutButton from '~/components/CheckoutButton'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, products } = release
    const { cart } = useCartContext()

    if (!products || !products.length) {
        return <></>
    }

    return (
        <>
            <Typography variant="h3">BUY</Typography>
            <br />
            {products.map((product, index) => (
                <Box display="flex" width="100%" key={index}>
                    <Box flexGrow={1}>
                        <Typography variant="h3">
                            {product.format} – £{product.price.toFixed(2)}
                        </Typography>
                    </Box>
                    <Box>
                        {cart.items.map((cartItem) => cartItem.id).includes(product.id) ? (
                            <CheckoutButton text="CHECKOUT" isWithCount={false} />
                        ) : (
                            <BuyButton
                                id={product.id}
                                price={product.price}
                                url={getUrl(release)}
                                name={product.title}
                                description={product.description.description}
                                imageUrl={release.image.fluid.src}
                                isLarge={true}
                                isLight={true}
                            />
                        )}
                    </Box>
                </Box>
            ))}

            <br />
        </>
    )
}
