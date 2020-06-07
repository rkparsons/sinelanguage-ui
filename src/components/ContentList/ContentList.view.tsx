import { Box, Collapse, Grid, Typography, withWidth } from '@material-ui/core'
import { Fade, HoverImage, ItemRow, TitleRow } from './ContentList.style'
import React, { useState } from 'react'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ContentCardMedia from '~/components/ContentCardMedia'
import { ContentItem } from '~/types/cms'
import ContentRow from '~/components/ContentRow'
import { ContentType } from '~/constants/contentType'
import Desktop from '~/components/Desktop'
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
    isLargePaddingOnMobile?: boolean
}

export default withWidth()(({ title, items, width, isLargePaddingOnMobile = true }: ViewProps) => {
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
                                        padding={isLargePaddingOnMobile ? rowPadding[width] : 1}
                                    >
                                        <ContentRow content={item} />
                                    </ItemRow>
                                </InvertOnHover>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Scrollable>
            <Desktop>
                {items.map((item, index) => (
                    <HoverImage
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        key={index}
                    >
                        <Box width={item.__typename === ContentType.VIDEO ? '160vh' : '80vh'}>
                            <Collapse
                                in={item === activeItem}
                                timeout={{
                                    enter: 400,
                                    exit: 200,
                                }}
                            >
                                <Fade isVisible={item === activeItem}>
                                    <ContentCardMedia content={item} />
                                </Fade>
                            </Collapse>
                        </Box>
                    </HoverImage>
                ))}
            </Desktop>
        </Overlay>
    )
})
