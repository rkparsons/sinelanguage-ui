import {
    BlurLayer,
    FocusImage,
    InvertBlurLayer,
    InvertLayer,
    List,
    Row,
    RowTitle,
} from './ContentList.style'
import { Grid, RootRef, Typography } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'

import { ContentModel } from '~/cms/models'
import Image from 'gatsby-image'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
    const [activeModel, setActiveModel] = useState<ContentModel>()
    const [verticalBreakpoints, setVerticalBreakpoints] = useState<number[]>([0, 0])
    const rows = useRef<(Element | null)[]>([])

    const highlightRow = useCallback(
        (model?: ContentModel, index?: number) => {
            if (!model) {
                setVerticalBreakpoints([0, 0])
                setActiveModel(undefined)
            } else {
                const rowElement = rows.current[index!]

                if (rowElement) {
                    const rowRect = rowElement.getBoundingClientRect()
                    setVerticalBreakpoints([rowRect.top, rowRect.bottom])
                }

                setActiveModel(model)
            }
        },
        [setVerticalBreakpoints]
    )

    return (
        <>
            <BlurLayer
                width={activeModel ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={verticalBreakpoints[0]}
                offset={0}
            ></BlurLayer>
            <List>
                <Grid container direction="column">
                    {models.map((model, index) => (
                        <Grid item xs={12} key={index}>
                            <RootRef
                                rootRef={(ref) => {
                                    rows.current.push(ref)
                                }}
                            >
                                <Row
                                    onMouseEnter={() => highlightRow(model, index)}
                                    onMouseLeave={() => highlightRow()}
                                >
                                    <Grid container>
                                        <Grid item>
                                            <InvertBlurLayer
                                                width={window.innerWidth - window.innerHeight}
                                            >
                                                <RowTitle>
                                                    <Typography variant="h3">
                                                        {model.getListRowTitle()}
                                                    </Typography>
                                                </RowTitle>
                                            </InvertBlurLayer>
                                        </Grid>
                                        <Grid item>
                                            <InvertLayer width={window.innerHeight}>
                                                <Typography variant="h3">PLAY</Typography>
                                            </InvertLayer>
                                        </Grid>
                                    </Grid>
                                </Row>
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </List>
            <BlurLayer
                width={activeModel ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></BlurLayer>
            {activeModel && (
                <FocusImage
                    height={window.innerHeight}
                    offset={window.innerWidth - window.innerHeight}
                >
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
