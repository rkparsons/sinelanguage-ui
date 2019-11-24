import * as ROUTES from '~/constants/routes'

import MenuIcon from '@material-ui/icons/Menu'
import NavItem from '~/components/NavItem'
import { NavList } from './Navigation.style'
import React from 'react'
import SignInButton from '~/components/SignInButton'
import SignOutButton from '~/components/SignOutButton'
import { isAuthenticated } from '~/utils/auth'

export default () => (
    <NavList>
        <li>
            <NavItem to={ROUTES.NEWS} title="News" />
        </li>
        <li>
            <NavItem to={ROUTES.ARTISTS} title="Artists" partiallyActive={true} />
        </li>
        <li>
            <NavItem to={ROUTES.RELEASES} title="Releases" partiallyActive={true} />
        </li>
        <li>
            <NavItem to={ROUTES.PODCASTS} title="Podcasts" partiallyActive={true} />
        </li>
        <li>
            <NavItem to={ROUTES.EVENTS} title="Events" partiallyActive={true} />
        </li>
        <li>
            <NavItem to={ROUTES.CONTACT} title="Contact" partiallyActive={true} />
        </li>
        {isAuthenticated() ? (
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
        )}
    </NavList>
)
