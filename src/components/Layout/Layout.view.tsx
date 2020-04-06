import { AppContainer, GlobalStyle, Main } from './Layout.style'
import React, { FC, ReactNode } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/styles/theme'
import withFlipAnimation from '~/components/withFlipAnimation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

const Layout: FC<Props> = ({ isDarkMode, setIsDarkMode, children }: Props) => {
    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />
            <GlobalStyle />
            <AppContainer>
                <Header />
                <Main>{children}</Main>
                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </AppContainer>
        </ThemeProvider>
    )
}

export default withFlipAnimation(Layout)
