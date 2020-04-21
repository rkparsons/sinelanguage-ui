import { Grid, Typography } from '@material-ui/core'
import { HoverImage, List, Row } from './ContentList.style'
import React, { useState } from 'react'

import { ContentModel } from '~/cms/models'
import { Link } from 'gatsby'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
    const [activeModel, setActiveModel] = useState<ContentModel>()

    return (
        <>
            <List>
                <Grid container direction="column" spacing={2}>
                    {models.map((model, index) => (
                        <Grid item xs={12} key={index}>
                            <Link to={model.getDetailUrl()}>
                                <Row
                                    onMouseEnter={() => setActiveModel(model)}
                                    onMouseLeave={() => setActiveModel(undefined)}
                                >
                                    <Grid container>
                                        <Typography variant="h3">
                                            {model.getListRowTitle()}
                                        </Typography>
                                    </Grid>
                                </Row>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </List>
            {activeModel && (
                <HoverImage container alignItems="center" justify="center">
                    <Grid item xs={12}>
                        {activeModel.getDashboardComponent()}
                    </Grid>
                </HoverImage>
            )}
        </>
    )
}
