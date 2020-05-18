import { Button, Grid, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import BagIcon from '~/components/BagIcon'
import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import MediaLink from '~/components/MediaLink'
import ProductMenu from '~/components/ProductMenu'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { title, artist, products } = release
    const [menuTrigger, setMenuTrigger] = useState<HTMLButtonElement>()
    const menuTriggerRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        if (menuTriggerRef.current) {
            setMenuTrigger(menuTriggerRef.current)
        }
    }

    const handleClose = () => {
        setMenuTrigger(undefined)
    }

    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(release)}>
                <ContentCardMedia content={release} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>
                    {artist.title.toUpperCase()}, <i>{title}</i>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item>
                        <ContentPlayButton
                            content={release}
                            trackIndex={0}
                            isLarge={false}
                            isLight={false}
                        />
                    </Grid>
                    {products && (
                        <Grid item>
                            <IconButton
                                buttonRef={menuTriggerRef}
                                label={<Typography variant="body1">BUY</Typography>}
                                icon={<BagIcon isLarge={false} />}
                                onClick={handleClick}
                                isLight={false}
                            />
                            <ProductMenu
                                triggerElement={menuTrigger}
                                closeHandler={handleClose}
                                release={release}
                            />
                        </Grid>
                    )}
                </Grid>
            </ContentCardDetail>
        </Column>
    )
}
