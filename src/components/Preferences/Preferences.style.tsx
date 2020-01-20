import { Button, Container, Grid, Switch, Typography } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'

export const PopupContainer = styled(Container)`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: grey;
    width: 20rem;
    z-index: 1;
    padding-bottom: 0.5rem;
`

export const PopupContent = styled(({ children, ...rest }) => (
    <Grid container {...rest}>
        {children}
    </Grid>
))``

export const Title = styled(({ children, ...rest }) => (
    <Grid container alignItems="center" justify="center" item xs={12} {...rest}>
        <h3>{children}</h3>
    </Grid>
))``

export const Message = styled(({ children, ...rest }) => (
    <Typography align="center" {...rest}>
        {children}
    </Typography>
))`
    margin-bottom: 1rem;
`

export const Row = styled(({ children, ...rest }) => (
    <Grid container alignItems="center" justify="flex-start" item xs={12} {...rest}>
        {children}
    </Grid>
))``

export const FinalRow = styled(Row)`
    padding-bottom: 1rem;
`

export const Toggle = styled(props => <Switch color="secondary" {...props}></Switch>)`
    margin-left: auto;
`

export const AcceptButton = styled(Button)`
    margin-left: auto;
`
