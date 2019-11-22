import { CardMedia } from '@material-ui/core'
import styled from 'styled-components'

interface Props {
    component: string
}

export default styled(CardMedia)<Props>`
    width: 300px;
    margin-bottom: 0;
`
