import React from 'react'
import { Link } from 'gatsby'
import { AuthUserContext } from '../Session'
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'
import headerStyles from './index.module.scss'

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser} />
            ) : (
                <NavigationNonAuth />
            )
        }
    </AuthUserContext.Consumer>
)

const NavigationAuth = ({ authUser }) => (
    <ul>
        <li>
            <Link className={headerStyles.link} to={ROUTES.LANDING}>
                Landing
            </Link>
        </li>
        <li>
            <Link className={headerStyles.link} to={ROUTES.HOME}>
                Home
            </Link>
        </li>
        <li>
            <Link className={headerStyles.link} to={ROUTES.BLOG}>
                Blog
            </Link>
        </li>
        <li>
            <Link className={headerStyles.link} to={ROUTES.ACCOUNT}>
                Account
            </Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link className={headerStyles.link} to={ROUTES.ADMIN}>
                    Admin
                </Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>
)

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link className={headerStyles.link} to={ROUTES.LANDING}>
                Landing
            </Link>
        </li>
        <li>
            <Link className={headerStyles.link} to={ROUTES.SIGN_IN}>
                Sign In
            </Link>
        </li>
    </ul>
)

export default Navigation
