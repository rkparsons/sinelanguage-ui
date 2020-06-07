import CheckoutButton from '~/components/CheckoutButton'
import { Grid } from '@material-ui/core'
import NavItem from '~/components/NavItem'
import React from 'react'
import { Route } from '~/constants/route'
import { Unicode } from '~/constants/unicode'

export default () => (
    <>
        <Grid item xs={12} md={3}>
            <Grid container direction="column">
                <Grid item>
                    <NavItem to={Route.RELEASES} title="RELEASES" partiallyActive={true} />
                </Grid>
                <Grid item>
                    <NavItem to={Route.PODCASTS} title="PODCASTS" partiallyActive={true} />
                </Grid>
                <Grid item>
                    <NavItem to={Route.ARTISTS} title="ARTISTS" partiallyActive={true} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
            <Grid container direction="column">
                <Grid item>
                    <NavItem to={Route.EVENTS} title="EVENTS" partiallyActive={true} />
                </Grid>
                <Grid item>
                    <NavItem to={Route.CONTACT} title="CONTACT" partiallyActive={true} />
                </Grid>
                <Grid item>
                    <CheckoutButton
                        text={`${Unicode.CART_LEFT_ALIGN} BAG`}
                        isWithCount={true}
                        isLarge={true}
                        isLight={true}
                    />
                </Grid>
            </Grid>
        </Grid>
    </>
)
