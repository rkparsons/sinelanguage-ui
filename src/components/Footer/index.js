import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MailChimp from '../MailChimp'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer>
            <p>
                Created by {data.site.siteMetadata.author}, © 2019{' '}
                <a href="www.twitter.com">twitter</a>
            </p>
            <MailChimp />
        </footer>
    )
}

export default Footer
