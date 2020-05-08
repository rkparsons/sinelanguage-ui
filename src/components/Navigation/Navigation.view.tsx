import { Add, Close } from '@material-ui/icons'
import { Grid, withWidth } from '@material-ui/core'
import { Header, HeaderRow } from './Navigation.style'
import React, { useState } from 'react'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import IconButton from '~/components/IconButton'
import NavItem from '~/components/NavItem'
import PointerEvents from '~/components/PointerEvents'
import { Route } from '~/constants/route'

type ViewProps = {
    width: Breakpoint
}

export default withWidth()(({ width }: ViewProps) => {
    const isMobile = ['xs', 'sm'].includes(width)
    const [isOverlay, setIsOverlay] = useState(false)

    return (
        <Header isOverlay={isOverlay}>
            <Grid container spacing={isMobile ? 10 : 0} justify="space-between">
                <Grid item xs={6}>
                    <NavItem to={Route.NEWS} title="SINE LANGUAGE RECORDS" />
                </Grid>
                {isMobile && (
                    <Grid item>
                        <PointerEvents value="all">
                            <IconButton
                                icon={isOverlay ? <Close /> : <Add />}
                                onClick={() => setIsOverlay(!isOverlay)}
                                isLight={true}
                            />
                        </PointerEvents>
                    </Grid>
                )}
                {(isOverlay || !isMobile) && (
                    <>
                        <Grid item xs={isMobile ? 12 : 3}>
                            <Grid container direction="column">
                                <HeaderRow item>
                                    <NavItem
                                        to={Route.ARTISTS}
                                        title="ARTISTS"
                                        partiallyActive={true}
                                    />
                                </HeaderRow>
                                <HeaderRow item>
                                    <NavItem
                                        to={Route.PODCASTS}
                                        title="PODCASTS"
                                        partiallyActive={true}
                                    />
                                </HeaderRow>
                                <HeaderRow item>
                                    <NavItem
                                        to={Route.RELEASES}
                                        title="RELEASES"
                                        partiallyActive={true}
                                    />
                                </HeaderRow>
                            </Grid>
                        </Grid>
                        <Grid item xs={isMobile ? 12 : 3}>
                            <Grid container direction="column">
                                <HeaderRow item>
                                    <NavItem
                                        to={Route.EVENTS}
                                        title="EVENTS"
                                        partiallyActive={true}
                                    />
                                </HeaderRow>
                                <HeaderRow item>
                                    <NavItem
                                        to={Route.CONTACT}
                                        title="CONTACT"
                                        partiallyActive={true}
                                    />
                                </HeaderRow>
                                <HeaderRow item>
                                    <NavItem to={Route.BAG} title="BAG" partiallyActive={true} />
                                </HeaderRow>
                            </Grid>
                        </Grid>
                    </>
                )}
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
