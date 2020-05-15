import { Box, Typography } from '@material-ui/core'

import BagIcon from '~/components/BagIcon'
import { Button } from './BuyButton.style'
import React from 'react'

type ViewProps = {
    id: string
    price: number
    url: string
    name: string
}

export default ({ id, price, url, name }: ViewProps) => (
    <Button
        isLight={true}
        isDisabled={false}
        className="buy-button snipcart-add-item"
        data-item-id={id}
        data-item-price={price}
        data-item-url={url}
        data-item-name={name}
    >
        <Box display="inline-flex">
            <Box>
                <BagIcon />
            </Box>
            <Box>
                <Typography variant="h3">ADD TO CART</Typography>
            </Box>
        </Box>
    </Button>
)
