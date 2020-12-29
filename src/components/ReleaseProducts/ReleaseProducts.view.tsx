import { AddLabel, ProductRow } from './ReleaseProducts.style'
import { Box, Grid, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { Fragment } from 'react'
import { getDescription, getPrice, isPhysicalFormat } from '~/utils/product'

import CheckoutButton from '~/components/CheckoutButton'
import Desktop from '~/components/Desktop'
import IconButton from '~/components/IconButton'
import Mobile from '~/components/Mobile'
import { Unicode } from '~/constants/unicode'
import useCartContext from '~/hooks/useCartContext'

type ViewProps = {
    title?: string
    release: Release
    products?: Product[]
    isLight: boolean
    isLarge: boolean
    isDescription: boolean
    onCheckoutClick?: () => void
}

export default ({
    title,
    release,
    products = [],
    isLight,
    isLarge,
    isDescription,
    onCheckoutClick = () => {},
}: ViewProps) => {
    const { artist, image } = release
    const { cart } = useCartContext()
    const isAnyProductAvailable = products.find(
        (product) => isPhysicalFormat(product) || product.fileGUID
    )

    if (!isAnyProductAvailable) {
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

            {products
                .filter((product) => isPhysicalFormat(product) || product.fileGUID)
                .map((product, index) => (
                    <Fragment key={index}>
                        <ProductRow isLarge={isLarge}>
                            <Box display="flex" width="100%" alignItems="center">
                                <Box flexGrow={1}>

                                    <Mobile>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography variant={isLarge ? 'h3' : 'body1'}>
                                                    {product.format}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Mobile>

                                    <Desktop>
                                        <Grid container>
                                            <Grid item md={isDescription ? 3 : 12}>
                                                <Typography variant={isLarge ? 'h3' : 'body1'}>
                                                    {product.format}
                                                </Typography>
                                            </Grid>
                                            {isDescription && (
                                                <Grid item md={9}>
                                                    <Typography variant={isLarge ? 'h3' : 'body1'}>
                                                        {getDescription(product)}
                                                    </Typography>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Desktop>
                                    
                                </Box>

                                <Box
                                    minWidth={isLarge ? '100px' : '75px'}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    {cart.items.find(
                                        (cartItem) => cartItem.id === product.title
                                    ) ? (
                                        <Typography
                                            variant={isLarge ? 'h3' : 'body1'}
                                            color="secondary"
                                        >
                                            ADDED
                                        </Typography>
                                    ) : (
                                        <IconButton
                                            label={
                                                <Typography variant={isLarge ? 'h3' : 'body1'}>
                                                    <AddLabel
                                                        price={`£${getPrice(product).toFixed(2)}`}
                                                    />
                                                </Typography>
                                            }
                                            onClick={() => {}}
                                            isLight={isLight}
                                            product={product}
                                            release={release}
                                            className="snipcart-add-item"
                                        />
                                    )}
                                </Box>
                            </Box>
                        </ProductRow>
                    </Fragment>
                ))}
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
                        isDisabled={cart.items.length === 0}
                        onClick={onCheckoutClick}
                    />
                </Grid>
            </Grid>
        </>
    )
}
