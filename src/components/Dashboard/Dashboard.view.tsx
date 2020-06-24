import React, { Fragment, memo } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import ContentCard from '~/components/ContentCard'
import { Dashboard } from './Dashboard.style'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import { Location } from '@reach/router'
import NewsletterCard from '~/components/NewsletterCard'
import PlaylistCard from '~/components/PlaylistCard'
import SlideInOnView from '~/components/SlideInOnView'
import { isMobile } from 'react-device-detect'
import useAudioContext from '~/hooks/useAudioContext'
import useDashboardItems from '~/hooks/useDashboardItems'

export default memo(() => {
    const { tracks } = useAudioContext()
    const items = useDashboardItems()
    const newsletterIndex = 12
    const playlistIndex = 8
    const timeout = 400

    function getTimeout(index: number) {
        const noise = (Math.random() * timeout) / 8

        if (isMobile) {
            return index > 1 ? timeout + noise : 0
        } else {
            return index > 10 ? timeout + noise : 0
        }
    }

    return (
        <>
            <Location>
                {({ location }) => (
                    <Dashboard isBlur={location.pathname !== '/'}>
                        <Head title="News" />
                        <Grid container>
                            {items.map((item, index) => (
                                <Fragment key={index}>
                                    {index === newsletterIndex && (
                                        <Grid item>
                                            <SlideInOnView
                                                timeout={getTimeout(index)}
                                                threshold={0.3}
                                            >
                                                <NewsletterCard />
                                            </SlideInOnView>
                                        </Grid>
                                    )}
                                    {index === playlistIndex && (
                                        <Grid item>
                                            <SlideInOnView
                                                timeout={getTimeout(index)}
                                                threshold={0.3}
                                            >
                                                <PlaylistCard />
                                            </SlideInOnView>
                                        </Grid>
                                    )}
                                    <Grid item>
                                        <SlideInOnView timeout={getTimeout(index)} threshold={0.3}>
                                            <ContentCard content={item} />
                                        </SlideInOnView>
                                    </Grid>
                                </Fragment>
                            ))}
                        </Grid>

                        <Footer />
                    </Dashboard>
                )}
            </Location>
            {tracks.length > 0 && <AudioPlayer />}
        </>
    )
})
