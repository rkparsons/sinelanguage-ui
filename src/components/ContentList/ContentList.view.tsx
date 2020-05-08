import { Grid, GridSpacing, Hidden, Typography, withWidth } from '@material-ui/core'
import { HoverImage, ItemRow, TitleRow } from './ContentList.style'
import React, { useState } from 'react'
import { rowPadding, rowSpacing } from '~/styles/sizes'

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

type ViewProps = {
    title: string
    items: ContentItem[]
    width: Breakpoint
}

export default withWidth()(({ title, items, width }: ViewProps) => {
    const [activeItem, setActiveItem] = useState<ContentItem>()

    return (
        <Overlay>
            <Scrollable>
                <Grid container direction="column" spacing={rowSpacing[width]}>
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
            {activeItem && (
                <Hidden mdDown>
                    <HoverImage container alignItems="center" justify="center">
                        <Grid item xs={activeItem.__typename === ContentType.VIDEO ? 12 : 5}>
                            <ContentCardMedia content={activeItem} />
                        </Grid>
                    </HoverImage>
                </Hidden>
            )}
        </Overlay>
    )
})
