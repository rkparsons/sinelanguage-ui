import { Paper, TextField } from '@material-ui/core'

import styled from 'styled-components'

export const Popup = styled.div<{ isActive: boolean }>`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme, isActive }) => (isActive ? theme.spacing(6) : theme.spacing(-100))};
    transition: right 200ms;
    margin-left: ${({ theme }) => theme.spacing(6)};
    max-width: ${({ theme }) => theme.spacing(100)};
    z-index: 3000;

    * {
        border-radius: 8px;
    }
`

export const Content = styled(Paper)<{ height?: number }>`
    padding: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme, height }) => (height ? theme.spacing(height) : 'auto')};
    background: none;
`

export const Blur = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.8);
    @supports (backdrop-filter: blur(12px)) {
        background-color: rgba(255, 255, 255, 0.15);
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
