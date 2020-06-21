import { Paper, TextField } from '@material-ui/core'

import { darkShadow } from '~/styles/shadows'
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
    height: ${({ theme }) => theme.spacing(50)};
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.8);
    @supports (backdrop-filter: blur(12px)) {
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
    }
`

export const BoxShadow = styled.svg`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    rect {
        width: 100%;
        height: 100%;
    }
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 1px 8px 0px rgba(0, 0, 0, 0.12); */
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
