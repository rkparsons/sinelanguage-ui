import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle, Main } from './Layout.style'
import React, { FC, ReactNode } from 'react'

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
    return (
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <>
                    <CssBaseline />
                    <GlobalStyle />
                    <AppContainer>
                        <Grid container direction="column">
                            <Grid item>
                                <Header />
                            </Grid>
                            <Grid item>
                                <Main>{children}</Main>
                            </Grid>
                            <Grid item>
                                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            </Grid>
                        </Grid>
                    </AppContainer>
                </>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}

export default withFlipAnimation(Layout)
