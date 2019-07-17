import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { AuthUserContext } from '../Session'
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'
import headerStyles from './index.module.scss'

const Navigation = () => (
    <div className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to={ROUTES.LANDING}>
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
                    to={ROUTES.ARTISTS}
                >
                    Artists
                </Link>
            </li>
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to={ROUTES.BLOG}
                >
                    Blog
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
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </ul>
    </div>
)

const NavigationAuth = ({ authUser }) => (
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
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to={ROUTES.ADMIN}
                >
                    Admin
                </Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </Fragment>
)

const NavigationNonAuth = () => (
    <Fragment>
        <li>
            <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={ROUTES.SIGN_IN}
            >
                Sign In
            </Link>
        </li>
    </Fragment>
)

export default Navigation
