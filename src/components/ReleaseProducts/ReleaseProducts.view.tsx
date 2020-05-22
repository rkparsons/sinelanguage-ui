import { AddLabel, ProductRow } from './ReleaseProducts.style'
import { Box, Typography } from '@material-ui/core'

import CheckoutButton from '~/components/CheckoutButton'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, products, image } = release
    const { cart } = useCartContext()

    if (!products || !products.length) {
        return <></>
    }

    return (
        <>
            <Typography variant="h3">BUY</Typography>
            <br />
            {products.map(({ id, title, format, price, description }, index) => (
                <ProductRow display="flex" width="100%" key={index}>
                    <Box flexGrow={1}>
                        <Typography variant="h3">{format}</Typography>
                    </Box>
                    <Box>
                        {cart.items.find((cartItem) => cartItem.id === id) ? (
                            <Typography variant="h3" color="secondary">
                                ADDED
                            </Typography>
                        ) : (
                            <IconButton
                                label={
                                    <Typography variant="h3">
                                        <AddLabel price={`£${price.toFixed(2)}`} />
                                    </Typography>
                                }
                                onClick={() => {}}
                                isLight={true}
                                cartItem={{
                                    id,
                                    price,
                                    url: getUrl(release),
                                    name: title,
                                    description: description.description,
                                    imageUrl: image.fluid.src,
                                }}
                                className="snipcart-add-item"
                            />
                        )}
                    </Box>
                </ProductRow>
            ))}

            {cart.items.find((cartItem) => products.map((x) => x.id).includes(cartItem.id)) ? (
                <>
                    <br />
                    <Box display="flex" justifyContent="flex-end" width="100%">
                        <CheckoutButton text={`GO TO CHECKOUT \u2191`} isWithCount={false} />
                    </Box>
                </>
            ) : (
                <></>
            )}

            <br />
        </>
    )
}
