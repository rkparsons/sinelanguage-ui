import { Header, HeaderRow } from './Header.style'

import { Grid } from '@material-ui/core'
import NavItem from '~/components/NavItem'
import React from 'react'
import { Route } from '~/constants/route'

export default () => (
    <Header>
        <Grid container direction="column" alignItems="flex-start" spacing={0}>
            <HeaderRow item>
                <NavItem to={Route.NEWS} title="SINE LANGUAGE RECORDS" />
            </HeaderRow>
            <HeaderRow item>
                <Grid container direction="row" spacing={4}>
                    <Grid item>
                        <NavItem to={Route.ARTISTS} title="ARTISTS" partiallyActive={true} />
                    </Grid>
                    <Grid item>
                        <NavItem to={Route.RELEASES} title="RELEASES" partiallyActive={true} />
                    </Grid>
                    <Grid item>
                        <NavItem to={Route.PODCASTS} title="PODCASTS" partiallyActive={true} />
                    </Grid>
                    <Grid item>
                        <NavItem to={Route.EVENTS} title="EVENTS" partiallyActive={true} />
                    </Grid>
                    <Grid item>
                        <NavItem to={Route.CONTACT} title="CONTACT" partiallyActive={true} />
                    </Grid>
                </Grid>
            </HeaderRow>
        </Grid>

        {/* {isAuthenticated() ? (
                <>
                    <li>
                        <NavItem to={ROUTES.ACCOUNT} title="Account" partiallyActive={true} />
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </>
            ) : (
                <li>
                    <SignInButton />
                    <MenuIcon />
                </li>
            )} */}
    </Header>
)
