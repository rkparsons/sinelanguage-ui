import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle, Main } from './Layout.style'
import React, { FC, ReactNode, useState } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import { AudioProvider } from '~/contexts/AudioContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Header from '~/components/Header'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import theme from '~/styles/theme'
import withFlipAnimation from '~/components/withFlipAnimation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

const Layout: FC<Props> = ({ isDarkMode, setIsDarkMode, children }: Props) => {
    const audio = { trackId: 430927230 }

    return (
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <AudioProvider value={audio}>
                    <>
                        <CssBaseline />
                        <GlobalStyle />
                        <AppContainer>
                            <Grid container direction="column">
                                <Grid item>
                                    <Header />
                                </Grid>
                                <Grid item>
                                    <Main>
                                        {children}
                                        <AudioPlayer />
                                    </Main>
                                </Grid>
                                <Grid item>
                                    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                                </Grid>
                            </Grid>
                        </AppContainer>
                    </>
                </AudioProvider>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}

export default withFlipAnimation(Layout)
