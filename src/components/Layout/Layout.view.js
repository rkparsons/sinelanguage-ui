import { Container, Content } from './Layout.style'

import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '../Footer'
import Navigation from '../Navigation'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../styles/theme'
import withFlipAnimation from '../withFlipAnimation'

export default withFlipAnimation(({ isDarkMode, setIsDarkMode, children }) => {
    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />

            <Container>
                <Content>
                    <Navigation />
                    <hr />
                    {children}
                </Content>
                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </Container>
        </ThemeProvider>
    )
})
