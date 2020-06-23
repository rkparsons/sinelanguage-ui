import { Grid, Typography } from '@material-ui/core'
import { Header, Title, ToggleMobileMenu } from './Navigation.style'
import React, { useState } from 'react'

import Desktop from '~/components/Desktop'
import IconButton from '~/components/IconButton'
import Links from './Links'
import Mobile from '~/components/Mobile'
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
                    <Mobile>
                        <Title>
                            <NavItem to={Route.NEWS} title="SINE LANGUAGE" />
                        </Title>
                    </Mobile>
                    <Desktop>
                        <Title>
                            <NavItem
                                to={Route.NEWS}
                                title={
                                    location.pathname === `/`
                                        ? `SINE LANGUAGE RECORDS`
                                        : `${Unicode.LEFT}  SINE LANGUAGE RECORDS`
                                }
                            />
                        </Title>
                    </Desktop>
                </Grid>
                <Mobile>
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
                </Mobile>
                <Desktop>
                    <Links />
                </Desktop>
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
