import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const SVG = styled.svg`
    position: absolute;
    left: 0;
    top: 0;
    overflow: visible;
    width: 100%;
    height: 100%;

    rect {
        width: 100%;
        height: 100%;
        filter: url(#shadow);
    }
`
