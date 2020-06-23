import { Popover as MuiPopover, Paper } from '@material-ui/core'

import styled from 'styled-components'

export const Popover = styled(MuiPopover)`
    .MuiPopover-paper {
        box-shadow: none;
        background: none;
    }
`

export const Shadow = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(2)};
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
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
    }
`
