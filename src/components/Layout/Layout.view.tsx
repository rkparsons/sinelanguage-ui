import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle, Main } from './Layout.style'
import { Artist, Podcast, Release } from '~/cms/types'
import React, { FC, ReactNode, useState } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Dashboard from '~/components/Dashboard'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Header from '~/components/Header'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import theme from '~/styles/theme'

type ViewProps = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

export default ({ isDarkMode, setIsDarkMode, children }: ViewProps) => {
    const [selectedMedia, setSelectedMedia] = useState<Podcast | Release | Artist>()

    return (
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <SelectedMediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
                    <>
                        <CssBaseline />
                        <GlobalStyle />
                        <AppContainer>
                            <Header />
                            {children}
                            <Dashboard />
                            <AudioPlayer />
                        </AppContainer>
                    </>
                </SelectedMediaContext.Provider>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}
