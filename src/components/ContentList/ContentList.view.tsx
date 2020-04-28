import { Grid, Typography } from '@material-ui/core'
import { HoverImage, ItemRow, List, TitleRow } from './ContentList.style'
import React, { useState } from 'react'
import { getDashboardComponent, getHoverSize, getListComponent, getUrl } from '~/utils/content'

import { ContentItem } from '~/types/cms'
import InvertOnHover from '~/components/InvertOnHover'
import { Link } from 'gatsby'

type ViewProps = {
    title: string
    items: ContentItem[]
}

export default ({ title, items }: ViewProps) => {
    const [activeItem, setActiveItem] = useState<ContentItem>()

    return (
        <>
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
                                    <InvertOnHover>{getListComponent(item)}</InvertOnHover>
                                </ItemRow>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </List>
            {activeItem && (
                <HoverImage container alignItems="center" justify="center">
                    <Grid item xs={getHoverSize(activeItem)}>
                        {getDashboardComponent(activeItem)}
                    </Grid>
                </HoverImage>
            )}
        </>
    )
}
