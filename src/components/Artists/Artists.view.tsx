import { ArtistImage, ArtistRow, Artists, FilterLayer } from './Artists.style'
import { Grid, RootRef, Typography } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'

import { Artist } from '~/cms/types'

type ViewProps = {
    artists: Artist[]
}

export default ({ artists }: ViewProps) => {
    const [activeArtist, setActiveArtist] = useState<Artist>()
    const [verticalBreakpoints, setVerticalBreakpoints] = useState<number[]>([0, 0])
    const rows = useRef<(Element | null)[]>([])

    const highlightRow = useCallback(
        (artist?: Artist, index?: number) => {
            if (!artist) {
                setVerticalBreakpoints([0, 0])
                setActiveArtist(undefined)
            } else {
                const rowElement = rows.current[index!]

                if (rowElement) {
                    const rowRect = rowElement.getBoundingClientRect()
                    setVerticalBreakpoints([rowRect.top, rowRect.bottom])
                }

                setActiveArtist(artist)
            }
        },
        [setVerticalBreakpoints]
    )

    return (
        <>
            <FilterLayer
                width={activeArtist ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={verticalBreakpoints[0]}
                offset={0}
            ></FilterLayer>
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
                                    onMouseEnter={() => highlightRow(artist, index)}
                                    onMouseLeave={() => highlightRow()}
                                    width={window.innerWidth - window.innerHeight}
                                >
                                    <Typography variant="h2">{artist.title}</Typography>
                                </ArtistRow>
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </Artists>
            <FilterLayer
                width={activeArtist ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></FilterLayer>
            {/* {activeArtist && (
                <ArtistImage
                    height={window.innerHeight}
                    offset={window.innerWidth - window.innerHeight}
                    title={activeArtist.title}
                    alt={activeArtist.title}
                    sizes={{ ...activeArtist.image.fluid, aspectRatio: 1 }}
                />
            )} */}
        </>
    )
}
