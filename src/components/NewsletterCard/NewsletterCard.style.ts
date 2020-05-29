import { Grid, TextField } from '@material-ui/core'

import styled from 'styled-components'

export const AspectRatio = styled.div`
    padding-top: 50%;
    position: relative;
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #efefef;
`

export const InputGrid = styled(Grid)`
    position: absolute;
    bottom: 0;
`

export const EmailInput = styled(TextField)`
    width: 100%;
    background-color: white;

    label {
        color: grey;
        padding-left: ${({ theme }) => theme.spacing(4)};
    }

    input {
        color: black;
        text-shadow: none;
        padding-left: ${({ theme }) => theme.spacing(4)};
    }
`

export const Title = styled.div`
    padding: ${({ theme }) => theme.spacing(4)};
`

export const Action = styled.div`
    padding: ${({ theme }) => theme.spacing(3)};

    * {
        color: blue;
    }
`
