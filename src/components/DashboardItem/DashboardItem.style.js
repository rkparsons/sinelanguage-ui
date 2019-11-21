import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)`
    display: ${props => (props.isVisible ? 'block' : 'none')};
    opacity: ${props => (props.isVisible ? 1 : 0)};
`
