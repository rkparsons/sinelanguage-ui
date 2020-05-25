import { BlackBackdrop, Fade, HoverImage, ItemRow, TitleRow } from './ContentList.style'
import { Collapse, Grid, Hidden, Typography, withWidth } from '@material-ui/core'
import React, { useState } from 'react'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ContentCardMedia from '~/components/ContentCardMedia'
import { ContentItem } from '~/types/cms'
import ContentRow from '~/components/ContentRow'
import { ContentType } from '~/constants/contentType'
import InvertOnHover from '~/components/InvertOnHover'
import { Link } from 'gatsby'
import Overlay from '~/components/Overlay'
import Scrollable from '~/components/Scrollable'
import { getUrl } from '~/utils/content'
import { rowPadding } from '~/styles/sizes'

type ViewProps = {
    title: string
    items: ContentItem[]
    width: Breakpoint
}

export default withWidth()(({ title, items, width }: ViewProps) => {
    const [activeItem, setActiveItem] = useState<ContentItem>()

    return (
        <Overlay>
            <Scrollable isWithMargin={false}>
                <Grid container>
                    <Grid item xs={12}>
                        <TitleRow>
                            <Typography variant="h3">
                                {title} ({items.length})
                            </Typography>
                        </TitleRow>
                    </Grid>
                    {items.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Link to={getUrl(item)}>
                                <InvertOnHover>
                                    <ItemRow
                                        onMouseEnter={() => setActiveItem(item)}
                                        onMouseLeave={() => setActiveItem(undefined)}
                                        padding={rowPadding[width]}
                                    >
                                        <ContentRow content={item} />
                                    </ItemRow>
                                </InvertOnHover>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Scrollable>
            <Hidden smDown>
                {items.map((item, index) => (
                    <HoverImage container alignItems="center" justify="center" key={index}>
                        <Grid item xs={item.__typename === ContentType.VIDEO ? 12 : 4}>
                            <Collapse in={item === activeItem} timeout={300}>
                                <Fade isVisible={item === activeItem}>
                                    <ContentCardMedia content={item} />
                                </Fade>
                            </Collapse>
                        </Grid>
                    </HoverImage>
                ))}
                <BlackBackdrop isVisible={activeItem?.__typename === ContentType.VIDEO} />
            </Hidden>
        </Overlay>
    )
})
