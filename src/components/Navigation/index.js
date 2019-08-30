import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SignInButton from '../SignInButton'
import SignOutButton from '../SignOutButton'
import * as ROUTES from '../../constants/routes'
import headerStyles from './index.module.scss'
import { isAuthenticated } from '../../utils/auth'

const Navigation = () => (
    <div className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to={ROUTES.NEWS}>
                Sine Language Records
            </Link>
        </h1>
        <ul className={headerStyles.navList}>
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to={ROUTES.NEWS}
                >
                    News
                </Link>
            </li>
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    partiallyActive={true}
                    to={ROUTES.ARTISTS}
                >
                    Artists
                </Link>
            </li>
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    partiallyActive={true}
                    to={ROUTES.PODCASTS}
                >
                    Podcasts
                </Link>
            </li>
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to={ROUTES.CONTACT}
                >
                    Contact
                </Link>
            </li>
            {isAuthenticated() ? <NavigationAuth /> : <NavigationNonAuth />}
        </ul>
    </div>
)

const NavigationAuth = () => (
    <Fragment>
        <li>
            <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={ROUTES.ACCOUNT}
            >
                Account
            </Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </Fragment>
)

const NavigationNonAuth = () => (
    <Fragment>
        <li>
            <SignInButton />
        </li>
    </Fragment>
)

export default Navigation
