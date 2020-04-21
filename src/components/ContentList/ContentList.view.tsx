import { Fade, Grid, RootRef, Typography } from '@material-ui/core'
import { FocusImage, List, Row } from './ContentList.style'
import React, { useRef, useState } from 'react'

import { ContentModel } from '~/cms/models'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
    const [activeModel, setActiveModel] = useState<ContentModel>()
    const rows = useRef<(Element | null)[]>([])

    return (
        <>
            <List>
                <Grid container direction="column" spacing={2}>
                    {models.map((model, index) => (
                        <Grid item xs={12} key={index}>
                            <RootRef
                                rootRef={(ref) => {
                                    rows.current.push(ref)
                                }}
                            >
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
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </List>
            {activeModel && (
                <FocusImage>
                    <Image
                        title={activeModel.getImageCaption()}
                        alt={activeModel.getImageCaption()}
                        sizes={{ ...activeModel.getImage().fluid, aspectRatio: 1 }}
                    />
                </FocusImage>
            )}
        </>
    )
}
