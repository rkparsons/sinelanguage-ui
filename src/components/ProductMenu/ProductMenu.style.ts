import { Popover as MuiPopover } from '@material-ui/core'
import { isIOS } from 'react-device-detect'
import styled from 'styled-components'

export const Popover = styled(MuiPopover)`
    .MuiPopover-paper {
        padding: ${({ theme }) => theme.spacing(2)};
        /* todo: add shadow when ios rendering bug is fixed */
        box-shadow: ${isIOS ? 'none' : 'auto'};
        background-color: rgba(255, 255, 255, 0.8);
        @supports (backdrop-filter: blur(12px)) {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
        }
    }
`
