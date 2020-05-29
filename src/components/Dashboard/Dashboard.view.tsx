import React, { Fragment } from 'react'

import ContentCard from '~/components/ContentCard'
import { Dashboard } from './Dashboard.style'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import { Location } from '@reach/router'
import PlaylistCard from '~/components/PlaylistCard'
import useDashboardItems from '~/hooks/useDashboardItems'

export default () => {
    const items = useDashboardItems()

    return (
        <Location>
            {({ location }) => (
                <Dashboard isBlur={location.pathname !== '/'}>
                    <Head title="News" />
                    <Grid container>
                        {items.map((item, index) => (
                            <Fragment key={index}>
                                {index === 8 && (
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
}
