import React, { Fragment, memo } from 'react'

import ContentCard from '~/components/ContentCard'
import { Dashboard } from './Dashboard.style'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import { Location } from '@reach/router'
import NewsletterCard from '~/components/NewsletterCard'
import PlaylistCard from '~/components/PlaylistCard'
import useDashboardItems from '~/hooks/useDashboardItems'

export default memo(() => {
    const items = useDashboardItems()
    const newsletterIndex = 12
    const playlistIndex = 8

    return (
        <Location>
            {({ location }) => (
                <Dashboard isBlur={location.pathname !== '/'}>
                    <Head title="News" />
                    <Grid container>
                        {items.map((item, index) => (
                            <Fragment key={index}>
                                {index === newsletterIndex && (
                                    <Grid item>
                                        <NewsletterCard />
                                    </Grid>
                                )}
                                {index === playlistIndex && (
                                    <Grid item>
                                        <PlaylistCard />
                                    </Grid>
                                )}
                                <Grid item>
                                    <ContentCard content={item} />
                                </Grid>
                            </Fragment>
                        ))}
                    </Grid>

                    <Footer />
                </Dashboard>
            )}
        </Location>
    )
})
