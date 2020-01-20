import { Button, Container, Grid, Switch } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'

export const PopupContainer = styled(Container)`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: grey;
    width: 20rem;
    z-index: 1;
`

export const PopupContent = styled(({ children, ...rest }) => (
    <Grid container {...rest}>
        {children}
    </Grid>
))``

export const Title = styled(({ children, ...rest }) => (
    <Grid container alignItems="center" justify="center" item xs={12} {...rest}>
        <h2>{children}</h2>
    </Grid>
))``

export const Row = styled(({ children, ...rest }) => (
    <Grid container alignItems="center" justify="flex-start" item xs={12} {...rest}>
        {children}
    </Grid>
))``

export const Toggle = styled(props => <Switch color="secondary" {...props}></Switch>)`
    margin-left: auto;
`

export const AcceptButton = styled(Button)`
    margin-left: auto;
`
