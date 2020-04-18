import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle, Main } from './Layout.style'
import { Artist, Podcast, Release } from '~/cms/types'
import React, { FC, ReactNode, useState } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import { Grid } from '@material-ui/core'
import Header from '~/components/Header'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import theme from '~/styles/theme'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

const Layout: FC<Props> = ({ isDarkMode, setIsDarkMode, children }: Props) => {
    const [selectedMedia, setSelectedMedia] = useState<Podcast | Release | Artist>()

    return (
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <SelectedMediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
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
                                {/* <Grid item>
                                    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                                </Grid> */}
                            </Grid>
                        </AppContainer>
                    </>
                </SelectedMediaContext.Provider>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}

export default Layout
