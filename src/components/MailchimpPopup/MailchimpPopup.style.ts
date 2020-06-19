import { Paper, TextField } from '@material-ui/core'

import styled from 'styled-components'

export const PopupContainer = styled(Paper)`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};
    margin-left: ${({ theme }) => theme.spacing(6)};
    z-index: 1000;
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: 8px;
    max-width: ${({ theme }) => theme.spacing(100)};

    background-color: rgba(255, 255, 255, 0.8);

    @supports (backdrop-filter: blur(12px)) {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(12px);
    }
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
