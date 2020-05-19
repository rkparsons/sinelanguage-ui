import BagIcon from '~/components/BagIcon'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'

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

export default ({ id, price, url, name, description, imageUrl, isLarge, isLight }: ViewProps) => (
    <IconButton
        label={<Typography variant={isLarge ? 'h3' : 'body1'}>BUY</Typography>}
        icon={<BagIcon isLarge={isLarge} />}
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
    />
)
