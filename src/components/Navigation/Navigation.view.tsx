import { Header, HeaderRow } from './Navigation.style'

import { Grid } from '@material-ui/core'
import NavItem from '~/components/NavItem'
import React from 'react'
import { Route } from '~/constants/route'

export default () => (
    <Header>
        <Grid container>
            <Grid item xs={6}>
                <NavItem to={Route.NEWS} title="SINE LANGUAGE RECORDS" />
            </Grid>
            <Grid item xs={3}>
                <Grid container direction="column">
                    <HeaderRow item>
                        <NavItem to={Route.ARTISTS} title="ARTISTS" partiallyActive={true} />
                    </HeaderRow>
                    <HeaderRow item>
                        <NavItem to={Route.PODCASTS} title="PODCASTS" partiallyActive={true} />
                    </HeaderRow>
                    <HeaderRow item>
                        <NavItem to={Route.RELEASES} title="RELEASES" partiallyActive={true} />
                    </HeaderRow>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction="column">
                    <HeaderRow item>
                        <NavItem to={Route.EVENTS} title="EVENTS" partiallyActive={true} />
                    </HeaderRow>
                    <HeaderRow item>
                        <NavItem to={Route.CONTACT} title="CONTACT" partiallyActive={true} />
                    </HeaderRow>
                    <HeaderRow item>
                        <NavItem to={Route.BAG} title="BAG" partiallyActive={true} />
                    </HeaderRow>
                </Grid>
            </Grid>
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
