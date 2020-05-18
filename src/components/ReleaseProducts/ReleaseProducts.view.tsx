import { Box, Grid, Typography } from '@material-ui/core'

import AddToCartButton from '~/components/AddToCartButton'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, products } = release

    if (!products.length) {
        return <></>
    }

    return (
        <>
            <Typography variant="h3">BUY</Typography>
            <br />
            <Grid container justify="space-between">
                {products.map((product, index) => (
                    <Box display="flex" width="100%" key={index}>
                        <Box flexGrow={1}>
                            <Typography variant="h3">
                                {product.format} – £{product.price.toFixed(2)}
                            </Typography>
                        </Box>
                        <Box>
                            <AddToCartButton
                                id={product.id}
                                price={product.price}
                                url={getUrl(release)}
                                name={`${artist.title} - ${release.title}`}
                                description={product.format}
                                imageUrl={release.image.fluid.src}
                                isLarge={true}
                                isLight={true}
                            />
                        </Box>
                    </Box>
                ))}
            </Grid>

            <br />
        </>
    )
}
