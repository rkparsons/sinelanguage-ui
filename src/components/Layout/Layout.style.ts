import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle``

export const Container = styled.div`
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Content = styled.div`
    flex-grow: 1;
`
