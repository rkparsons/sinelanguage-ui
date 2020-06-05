import { AddLabel, ProductRow } from './ReleaseProducts.style'
import { Box, Grid, Hidden, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'

import CheckoutButton from '~/components/CheckoutButton'
import IconButton from '~/components/IconButton'
import ProductFormat from '~/constants/productFormat'
import React from 'react'
import { Unicode } from '~/constants/unicode'
import { getUrl } from '~/utils/content'
import { isPhysicalFormat } from '~/utils/product'
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
    const allProductDownloadsAvailable =
        products && products.every((product) => isPhysicalFormat(product) || product.fileGUID)

    if (!products || !products.length || !allProductDownloadsAvailable) {
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
                <>
                    <ProductRow display="flex" width="100%" key={index} alignItems="center">
                        <Box flexGrow={1}>
                            <Grid container>
                                <Grid item xs={12} md={isDescription ? 3 : 12}>
                                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                                        {format}{' '}
                                        {isDescription && (
                                            <Hidden mdUp>({description.description})</Hidden>
                                        )}
                                    </Typography>
                                </Grid>
                                {isDescription && (
                                    <Hidden smDown>
                                        <Grid item xs={9}>
                                            <Typography variant={isLarge ? 'h3' : 'body1'}>
                                                {description.description}
                                            </Typography>
                                        </Grid>
                                    </Hidden>
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
                    <Hidden smUp>
                        <br />
                    </Hidden>
                </>
            ))}
            {isProductInCart && (
                <>
                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                        <br />
                    </Typography>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <CheckoutButton
                                text={`GO TO CHECKOUT ${Unicode.UP}`}
                                isWithCount={false}
                                isLarge={isLarge}
                                isLight={isLight}
                                onClick={onCheckoutClick}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}
