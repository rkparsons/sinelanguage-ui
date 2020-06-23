import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Popup = styled.div`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};
    margin-left: ${({ theme }) => theme.spacing(6)};
    max-width: ${({ theme }) => theme.spacing(100)};
    z-index: 3000;
`

export const EmailInput = styled(TextField)`
    width: 100%;
`

export const EmailInputContainer = styled.div<{ isInvalid: boolean }>`
    input {
        color: ${({ isInvalid }) => (isInvalid ? 'red' : 'black')};
        text-shadow: none;

        &::placeholder {
            color: black;
            opacity: 0.3;
        }
    }
`
