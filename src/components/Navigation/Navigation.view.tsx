import { Grid, Typography } from '@material-ui/core'
import { Header, Title, ToggleMobileMenu } from './Navigation.style'
import React, { useState } from 'react'

import Desktop from '~/components/Desktop'
import IconButton from '~/components/IconButton'
import Links from './Links'
import NavItem from '~/components/NavItem'
import ResponsiveBox from '~/components/ResponsiveBox'
import ResponsiveGrid from '~/components/ResponsiveGrid'
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
                    <ResponsiveBox isDesktop={false} >
                        <Title>
                            <NavItem
                                to={Route.NEWS}
                                title={
                                    location.pathname === `/` || location.pathname === `/menu`
                                        ? `SINE LANGUAGE`
                                        : `${Unicode.LEFT}  SINE LANGUAGE`
                                }
                            />
                        </Title>                        
                    </ResponsiveBox>
                    <ResponsiveBox isDesktop={true}>
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
                    </ResponsiveBox>
                </Grid>
                <ResponsiveGrid item isDesktop={false}>
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
                </ResponsiveGrid>
                <Links isDesktop={true}/>
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
