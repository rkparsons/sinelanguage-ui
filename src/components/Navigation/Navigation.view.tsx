import { Add, Close } from '@material-ui/icons'
import { Grid, withWidth } from '@material-ui/core'
import React, { useState } from 'react'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Header } from './Navigation.style'
import IconButton from '~/components/IconButton'
import Links from './Links'
import NavItem from '~/components/NavItem'
import PointerEvents from '~/components/PointerEvents'
import { Route } from '~/constants/route'
import { globalHistory } from '@reach/router'
import { navigate } from 'gatsby'

type ViewProps = {
    width: Breakpoint
    location: Location
}

export default withWidth()(({ width, location }: ViewProps) => {
    const isMenuOpen = location.pathname === '/menu'
    const isMobile = ['xs', 'sm'].includes(width)
    const [previousLocation, setPreviousLocation] = useState<string>()

    const handleMenuClick = () => {
        if (isMenuOpen) {
            navigate(previousLocation || '/')
        } else {
            setPreviousLocation(location.pathname)
            navigate('/menu')
        }
    }

    return (
        <Header>
            <Grid container spacing={isMobile ? 10 : 0} justify="space-between">
                <Grid item xs={6}>
                    <NavItem to={Route.NEWS} title="SINE LANGUAGE RECORDS" />
                </Grid>
                {isMobile && (
                    <Grid item>
                        <PointerEvents value="all">
                            <IconButton
                                icon={isMenuOpen ? <Close /> : <Add />}
                                onClick={handleMenuClick}
                                isLight={true}
                            />
                        </PointerEvents>
                    </Grid>
                )}
                {!isMobile && <Links isMobile={isMobile} />}
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
})
