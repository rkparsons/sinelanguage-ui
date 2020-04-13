import * as ROUTES from '~/constants/routes'

import { Grid } from '@material-ui/core'
import { Header } from './Header.style'
import NavItem from '~/components/NavItem'
import React from 'react'

export default () => (
    <Header>
        <Grid container spacing={5}>
            <Grid item>
                <NavItem to={ROUTES.NEWS} title="SINE LANGUAGE RECORDS" />
            </Grid>
            <Grid item>
                <NavItem to={ROUTES.ARTISTS} title="ARTISTS" partiallyActive={true} />
            </Grid>
            <Grid item>
                <NavItem to={ROUTES.RELEASES} title="RELEASES" partiallyActive={true} />
            </Grid>
            <Grid item>
                <NavItem to={ROUTES.PODCASTS} title="PODCASTS" partiallyActive={true} />
            </Grid>
            <Grid item>
                <NavItem to={ROUTES.EVENTS} title="EVENTS" partiallyActive={true} />
            </Grid>
            <Grid item>
                <NavItem to={ROUTES.CONTACT} title="CONTACT" partiallyActive={true} />
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
