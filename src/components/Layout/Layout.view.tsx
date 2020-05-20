import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle } from './Layout.style'
import React, { ReactNode } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import AudioProvider from '~/components/AudioProvider'
import Cart from '~/components/Cart'
import CssBaseline from '@material-ui/core/CssBaseline'
import Dashboard from '~/components/Dashboard'
import { Location } from '@reach/router'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Navigation from '~/components/Navigation'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import theme from '~/styles/theme'

type ViewProps = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

export default ({ isDarkMode, setIsDarkMode, children }: ViewProps) => (
    <>
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <AudioProvider>
                    <CssBaseline />
                    <GlobalStyle />
                    <AppContainer>
                        <Location>{({ location }) => <Navigation location={location} />}</Location>
                        <main>
                            {children}
                            <Dashboard />
                        </main>
                        <AudioPlayer hideTimeout={5000} />
                    </AppContainer>
                </AudioProvider>
            </ScThemeProvider>
        </MuiThemeProvider>
        <Cart version="3.0.13" />
    </>
)
