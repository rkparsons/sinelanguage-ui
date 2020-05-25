import { ActionRow, AddLabel, ProductRow } from './ReleaseProducts.style'
import { Box, Grid, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'

import CheckoutButton from '~/components/CheckoutButton'
import IconButton from '~/components/IconButton'
import React from 'react'
import { getUrl } from '~/utils/content'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    title?: string
    release: Release
    products: Product[]
    isLight: boolean
    isLarge: boolean
    isDescription: boolean
    onCheckoutClick?: () => void
}

export default ({
    title,
    release,
    products,
    isLight,
    isLarge,
    isDescription,
    onCheckoutClick = () => {},
}: ViewProps) => {
    const { artist, image } = release
    const { cart } = useCartContext()
    const isProductInCart =
        cart.items.find((cartItem) => products.map((x) => x.id).includes(cartItem.id)) !== undefined

    if (!products || !products.length) {
        return <></>
    }

    return (
        <>
            {title && (
                <>
                    <Typography variant={isLarge ? 'h3' : 'body1'}>BUY</Typography>
                    <br />
                </>
            )}

            {products.map(({ id, title, format, price, description, fileGUID }, index) => (
                <ProductRow display="flex" width="100%" key={index} alignItems="center">
                    <Box flexGrow={1} minWidth={isLarge ? '350px' : '200px'}>
                        <Grid container>
                            <Grid item xs={isDescription ? 3 : 12}>
                                <Typography variant={isLarge ? 'h3' : 'body1'}>{format}</Typography>
                            </Grid>
                            {isDescription && (
                                <Grid item xs={9}>
                                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                                        {description.description}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Box>

                    <Box
                        minWidth={isLarge ? '100px' : '75px'}
                        display="flex"
                        justifyContent="flex-end"
                    >
                        {cart.items.find((cartItem) => cartItem.id === id) ? (
                            <Typography variant={isLarge ? 'h3' : 'body1'} color="secondary">
                                ADDED
                            </Typography>
                        ) : (
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
                                    url: getUrl(release),
                                    name: title,
                                    description: description.description,
                                    imageUrl: image.fluid.src,
                                    fileGUID,
                                }}
                                className="snipcart-add-item"
                            />
                        )}
                    </Box>
                </ProductRow>
            ))}
            <Typography variant={isLarge ? 'h3' : 'body1'}>
                <br />
            </Typography>

            <Grid container justify="space-between">
                <Grid item>
                    <IconButton
                        label={<Typography variant={isLarge ? 'h3' : 'body1'}>CLOSE</Typography>}
                        onClick={onCheckoutClick}
                        isLight={isLight}
                    />
                </Grid>
                <Grid item>
                    <CheckoutButton
                        text={`GO TO CHECKOUT \u2191`}
                        isWithCount={false}
                        isLarge={isLarge}
                        isLight={isLight}
                        onClick={onCheckoutClick}
                        isVisible={isProductInCart}
                    />
                </Grid>
            </Grid>
        </>
    )
}
