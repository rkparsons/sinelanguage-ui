import { Artist, Release } from '~/cms/types'
import {
    ArtistImage,
    ArtistPlay,
    ArtistRow,
    ArtistTitle,
    Artists,
    BlurLayer,
    InvertBlurLayer,
    InvertLayer,
} from './Releases.style'
import { Grid, RootRef, Typography } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'

import Image from 'gatsby-image'

type ViewProps = {
    releases: Release[]
}

export default ({ releases }: ViewProps) => {
    const [activeRelease, setActiveRelease] = useState<Release>()
    const [verticalBreakpoints, setVerticalBreakpoints] = useState<number[]>([0, 0])
    const rows = useRef<(Element | null)[]>([])

    const highlightRow = useCallback(
        (release?: Release, index?: number) => {
            if (!release) {
                setVerticalBreakpoints([0, 0])
                setActiveRelease(undefined)
            } else {
                const rowElement = rows.current[index!]

                if (rowElement) {
                    const rowRect = rowElement.getBoundingClientRect()
                    setVerticalBreakpoints([rowRect.top, rowRect.bottom])
                }

                setActiveRelease(release)
            }
        },
        [setVerticalBreakpoints]
    )

    return (
        <>
            <BlurLayer
                width={activeRelease ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={verticalBreakpoints[0]}
                offset={0}
            ></BlurLayer>
            <Artists>
                <Grid container direction="column">
                    {releases.map((release, index) => (
                        <Grid item xs={12} key={index}>
                            <RootRef
                                rootRef={(ref) => {
                                    rows.current.push(ref)
                                }}
                            >
                                <ArtistRow
                                    onMouseEnter={() => highlightRow(release, index)}
                                    onMouseLeave={() => highlightRow()}
                                >
                                    <Grid container>
                                        <Grid item>
                                            <InvertBlurLayer
                                                width={window.innerWidth - window.innerHeight}
                                            >
                                                <ArtistTitle>
                                                    <Typography variant="h3">
                                                        [{release.uid}]&nbsp;&nbsp;&nbsp;
                                                        {release.title}
                                                    </Typography>
                                                </ArtistTitle>
                                            </InvertBlurLayer>
                                        </Grid>
                                        <Grid item>
                                            <InvertLayer width={window.innerHeight}>
                                                <ArtistPlay>
                                                    <Typography variant="h3">PLAY</Typography>
                                                </ArtistPlay>
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
                width={activeRelease ? window.innerWidth - window.innerHeight : window.innerWidth}
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></BlurLayer>
            {activeRelease && (
                <ArtistImage
                    height={window.innerHeight}
                    offset={window.innerWidth - window.innerHeight}
                >
                    <Image
                        title={activeRelease.title}
                        alt={activeRelease.title}
                        sizes={{ ...activeRelease.image.fluid, aspectRatio: 1 }}
                    />
                </ArtistImage>
            )}
        </>
    )
}
