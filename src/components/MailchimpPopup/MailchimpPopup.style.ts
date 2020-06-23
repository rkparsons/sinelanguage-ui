import { Paper, TextField } from '@material-ui/core'

import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const AbsoluteContainer = styled.div`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};
    margin-left: ${({ theme }) => theme.spacing(6)};
    z-index: 3000;
`

export const Content = styled(Paper)`
    border-radius: 8px;
    max-width: ${({ theme }) => theme.spacing(100)};
    height: ${({ theme }) => theme.spacing(50)};
    padding: ${({ theme }) => theme.spacing(3)};
    background: none;
`

export const Blur = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;

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
