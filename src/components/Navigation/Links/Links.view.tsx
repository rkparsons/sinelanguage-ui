import CheckoutButton from '~/components/CheckoutButton'
import { Grid } from '@material-ui/core'
import NavItem from '~/components/NavItem'
import React from 'react'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import { Route } from '~/constants/route'
import { Unicode } from '~/constants/unicode'

type ViewProps = {
    isDesktop: boolean
}

export default ({ isDesktop }: ViewProps) => (
    <>
        <ResponsiveGrid item xs={12} md={3} isDesktop={isDesktop}>
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
        </ResponsiveGrid>
        <ResponsiveGrid item xs={12} md={3} isDesktop={isDesktop}>
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
                        isDisabled={false}
                    />
                </Grid>
            </Grid>
        </ResponsiveGrid>
    </>
)
