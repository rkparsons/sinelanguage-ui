import React, { ComponentProps } from 'react'
import { darkGrey, grey, lightGrey } from '../../styles/colours'

import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled((props: any) => <Link {...props} activeStyle={{ color: darkGrey }} />)`
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    color: ${lightGrey};

    &:hover {
        color: ${grey};
    }
`
