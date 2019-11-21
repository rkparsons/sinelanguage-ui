import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
