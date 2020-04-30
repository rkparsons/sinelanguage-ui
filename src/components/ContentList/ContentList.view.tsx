import { Grid, Typography } from '@material-ui/core'
import { HoverImage, ItemRow, List, TitleRow } from './ContentList.style'
import React, { useState } from 'react'

import ContentCardMedia from '~/components/ContentCardMedia'
import { ContentItem } from '~/types/cms'
import ContentRow from '~/components/ContentRow'
import { ContentType } from '~/constants/contentType'
import InvertOnHover from '~/components/InvertOnHover'
import { Link } from 'gatsby'
import Overlay from '~/components/Overlay'
import { getUrl } from '~/utils/content'

type ViewProps = {
    title: string
    items: ContentItem[]
}

export default ({ title, items }: ViewProps) => {
    const [activeItem, setActiveItem] = useState<ContentItem>()

    return (
        <Overlay>
            <List>
                <Grid container direction="column" spacing={2}>
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
                                <ItemRow
                                    onMouseEnter={() => setActiveItem(item)}
                                    onMouseLeave={() => setActiveItem(undefined)}
                                >
                                    <InvertOnHover>
                                        <ContentRow content={item} />
                                    </InvertOnHover>
                                </ItemRow>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </List>
            {activeItem && (
                <HoverImage container alignItems="center" justify="center">
                    <Grid item xs={activeItem.__typename === ContentType.VIDEO ? 12 : 5}>
                        <ContentCardMedia content={activeItem} />
                    </Grid>
                </HoverImage>
            )}
        </Overlay>
    )
}
