import { Grid, Typography } from '@material-ui/core'
import { HoverImage, ItemRow, List, TitleRow } from './ContentList.style'
import React, { useState } from 'react'

import { ContentModel } from '~/models/ContentModel'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
    const [activeModel, setActiveModel] = useState<ContentModel>()

    return (
        <Location>
            {({ location }) => (
                <>
                    <List>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <TitleRow>
                                    <Typography variant="h3">
                                        {location.pathname.slice(1)} ({models.length})
                                    </Typography>
                                </TitleRow>
                            </Grid>
                            {models.map((model, index) => (
                                <Grid item xs={12} key={index}>
                                    <Link to={model.getDetailUrl()}>
                                        <ItemRow
                                            onMouseEnter={() => setActiveModel(model)}
                                            onMouseLeave={() => setActiveModel(undefined)}
                                        >
                                            <Typography variant="h3">
                                                {model.getListRowTitle()}
                                            </Typography>
                                        </ItemRow>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </List>
                    {activeModel && (
                        <HoverImage container alignItems="center" justify="center">
                            <Grid item xs={activeModel.hoverWidth}>
                                {activeModel.getDashboardComponent()}
                            </Grid>
                        </HoverImage>
                    )}
                </>
            )}
        </Location>
    )
}
