import { Link } from 'gatsby'
import styled from 'styled-components'

type StyleProps = {
    isVisible: boolean
}

export default styled(Link)<StyleProps>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
