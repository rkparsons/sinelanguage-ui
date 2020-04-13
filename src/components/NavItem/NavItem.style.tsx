import { GatsbyLinkProps, Link } from 'gatsby'
import React, { FC } from 'react'

import { grey } from '~/styles/colours'
import styled from 'styled-components'

/* Workaround to exclude the "ref" property from GatsbyLinkProps. Can be removed when issue is resolved in Gatsby */
const CustomLink: FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = props => <Link {...props}></Link>

export default styled((props: GatsbyLinkProps<{}>) => (
    <CustomLink {...props} activeStyle={{ color: 'black' }} />
))`
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    color: white;

    &:hover {
        color: ${grey};
    }
`
