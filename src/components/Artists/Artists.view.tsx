import { ArtistRow, Artists, FilterLayer } from './Artists.style'
import { Box, Grid, RootRef, Typography } from '@material-ui/core'
import React, { ReactNode, useCallback, useRef, useState } from 'react'

import { Artist } from '~/cms/types'

type ViewProps = {
    artists: Artist[]
}

export default ({ artists }: ViewProps) => {
    const [verticalBreakpoints, setVerticalBreakpoints] = useState<number[]>([0, 0])
    const rows = useRef<(Element | null)[]>([])

    const highlightRow = useCallback(
        (index?: number) => {
            if (!index) {
                setVerticalBreakpoints([0, 0])
            }

            const rowElement = rows.current[index!]

            if (rowElement) {
                const rowRect = rowElement.getBoundingClientRect()
                setVerticalBreakpoints([rowRect.top, rowRect.bottom])
            }
        },
        [setVerticalBreakpoints]
    )

    return (
        <>
            <FilterLayer height={verticalBreakpoints[0]} offset={0}></FilterLayer>
            <Artists>
                <Grid container direction="column">
                    {artists.map((artist, index) => (
                        <Grid item xs={12} key={index}>
                            <RootRef
                                rootRef={ref => {
                                    rows.current.push(ref)
                                }}
                            >
                                <ArtistRow
                                    onMouseEnter={() => highlightRow(index)}
                                    onMouseLeave={() => highlightRow()}
                                >
                                    <Typography variant="h2">{artist.title}</Typography>
                                </ArtistRow>
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </Artists>
            <FilterLayer
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></FilterLayer>
        </>
    )
}
