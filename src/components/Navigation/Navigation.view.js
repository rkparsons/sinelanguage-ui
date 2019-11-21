import * as ROUTES from '../../constants/routes'

import MenuIcon from '@material-ui/icons/Menu'
import NavItem from '../NavItem'
import { NavList } from './Navigation.style'
import React from 'react'
import SignInButton from '../SignInButton'
import SignOutButton from '../SignOutButton'
import { isAuthenticated } from '../../utils/auth'

export default () => (
    <NavList>
        <li>
            <NavItem route={ROUTES.NEWS} title="News" />
        </li>
        <li>
            <NavItem route={ROUTES.ARTISTS} title="Artists" isPartial={true} />
        </li>
        <li>
            <NavItem route={ROUTES.RELEASES} title="Releases" isPartial={true} />
        </li>
        <li>
            <NavItem route={ROUTES.PODCASTS} title="Podcasts" isPartial={true} />
        </li>
        <li>
            <NavItem route={ROUTES.EVENTS} title="Events" isPartial={true} />
        </li>
        <li>
            <NavItem route={ROUTES.CONTACT} title="Contact" isPartial={true} />
        </li>
        {isAuthenticated() ? (
            <>
                <li>
                    <NavItem route={ROUTES.ACCOUNT} title="Account" isPartial={true} />
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
