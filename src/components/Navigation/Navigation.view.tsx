import { Grid, Hidden, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Header, ToggleMobileMenu } from './Navigation.style'
import React, { useState } from 'react'

import IconButton from '~/components/IconButton'
import Links from './Links'
import NavItem from '~/components/NavItem'
import { Route } from '~/constants/route'
import { Unicode } from '~/constants/unicode'
import { navigate } from 'gatsby'

type ViewProps = {
    location: Location
}

export default ({ location }: ViewProps) => {
    const isMenuOpen = location.pathname === '/menu'
    const [previousLocation, setPreviousLocation] = useState<string>()

    function handleMenuClick() {
        if (isMenuOpen) {
            navigate(previousLocation || '/')
        } else {
            setPreviousLocation(location.pathname)
            navigate('/menu')
        }
    }

    return (
        <Header>
            <Grid container justify="space-between">
                <Grid item xs={9} md={6}>
                    <Hidden mdUp>
                        <NavItem to={Route.NEWS} title="SINE LANGUAGE" />
                    </Hidden>
                    <Hidden smDown>
                        <NavItem to={Route.NEWS} title="SINE LANGUAGE RECORDS" />
                    </Hidden>
                </Grid>
                <Hidden mdUp>
                    <Grid item>
                        <ToggleMobileMenu>
                            <IconButton
                                label={
                                    <Typography variant="h1" align="center">
                                        {isMenuOpen ? Unicode.CLOSE : '+'}
                                    </Typography>
                                }
                                onClick={handleMenuClick}
                                isLight={true}
                            />
                        </ToggleMobileMenu>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Links />
                </Hidden>
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
}
