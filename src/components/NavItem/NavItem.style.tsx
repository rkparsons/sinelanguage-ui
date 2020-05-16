import { GatsbyLinkProps, Link } from 'gatsby'
import React, { FC } from 'react'
import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

/* Workaround to exclude the "ref" property from GatsbyLinkProps. Can be removed when issue is resolved in Gatsby */
const CustomLink: FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = (props) => <Link {...props}></Link>

export default styled((props: GatsbyLinkProps<{}>) => (
    <CustomLink {...props} activeStyle={{ color: 'black', textShadow: lightShadow }} />
))`
    text-decoration: none;
    color: white;
    text-shadow: ${darkShadow};

    &:hover {
        color: black;
        text-shadow: ${lightShadow};
    }

    h3 {
        display: inline-block;
        pointer-events: all;
    }
`
