import { Box, Typography } from '@material-ui/core'

import BagIcon from '~/components/BagIcon'
import IconButton from '~/components/IconButton'
import React from 'react'

type ViewProps = {
    id: string
    price: number
    url: string
    name: string
    description: string
    imageUrl: string
    formats: string
    isLarge: boolean
    isLight: boolean
}

export default ({
    id,
    price,
    url,
    name,
    description,
    imageUrl,
    formats,
    isLarge,
    isLight,
}: ViewProps) => (
    <IconButton
        label={<Typography variant={isLarge ? 'h3' : 'body1'}>BUY</Typography>}
        icon={<BagIcon isLarge={isLarge} />}
        onClick={() => console.log('buy')}
        isLight={isLight}
        cartItem={{
            id,
            price,
            url,
            name,
            description,
            imageUrl,
            formats,
        }}
    />
)
