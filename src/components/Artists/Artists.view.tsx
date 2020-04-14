import {
    ArtistImage,
    ArtistRow,
    Artists,
    BlurLayer,
    InvertBlurLayer,
    InvertLayer,
} from './Artists.style'
import { Grid, RootRef, Typography } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'

import { Artist } from '~/cms/types'
import Image from 'gatsby-image'

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
            <BlurLayer
                width={activeArtist ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={verticalBreakpoints[0]}
                offset={0}
            ></BlurLayer>
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
                                >
                                    <Grid container>
                                        <Grid item>
                                            <InvertBlurLayer
                                                width={window.innerWidth - window.innerHeight}
                                            >
                                                <Typography variant="h2">{artist.title}</Typography>
                                            </InvertBlurLayer>
                                        </Grid>
                                        <Grid item>
                                            <InvertLayer width={window.innerHeight}>
                                                <Typography variant="h2">PLAY</Typography>
                                            </InvertLayer>
                                        </Grid>
                                    </Grid>
                                </ArtistRow>
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </Artists>
            <BlurLayer
                width={activeArtist ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></BlurLayer>
            {/* {activeArtist && (
                <ArtistImage
                    height={window.innerHeight}
                    offset={window.innerWidth - window.innerHeight}
                >
                    <Image
                        title={activeArtist.title}
                        alt={activeArtist.title}
                        sizes={{ ...activeArtist.image.fluid, aspectRatio: 1 }}
                    />
                </ArtistImage>
            )} */}
        </>
    )
}
