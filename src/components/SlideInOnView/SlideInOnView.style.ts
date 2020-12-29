import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { columns } from '~/styles/sizes'
import styled from 'styled-components'

type SlideProps = {
    isInView: boolean
    timeout: number
    count: number
}

const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']

export const Slide = styled.div<SlideProps>`
    ${({ theme, isInView, timeout, count }) => breakpoints.map(breakpoint => 
        `${theme.breakpoints.only(breakpoint)} {
            transform: translateY(${isInView || count <= 2 * columns[breakpoint] ? 0 : 33}%);
            transition: transform ${timeout}ms;
        }`)
    }
`
