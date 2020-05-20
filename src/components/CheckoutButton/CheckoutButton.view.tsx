import BagIcon from '~/components/BagIcon'
import { CheckoutButton } from './CheckoutButton.style'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Typography } from '@material-ui/core'

export default () => (
    <CheckoutButton className="snipcart-checkout">
        <IconButton
            label={
                <Typography variant={'h3'}>
                    BAG (<span className="snipcart-items-count" />)
                </Typography>
            }
            icon={<BagIcon isLarge={true} />}
            onClick={() => {}}
            isLight={true}
        />
    </CheckoutButton>
)
