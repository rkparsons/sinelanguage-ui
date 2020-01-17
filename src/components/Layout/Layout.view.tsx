import { Container, Content, GlobalStyle } from './Layout.style'
import React, { FC, ReactNode } from 'react'
import { enableAnalytics, initAnalytics } from '~/utils/analytics'

import CookieConsent from 'react-cookie-consent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'
import Preferences from '~/components/Preferences'
import ReactGA from 'react-ga'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/styles/theme'
import withFlipAnimation from '~/components/withFlipAnimation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    isAnalyticsEnabled: boolean
    setIsAnalyticsEnabled: (isAnalyticsEnabled: boolean) => void
    children: ReactNode
}

const Layout: FC<Props> = ({
    isDarkMode,
    setIsDarkMode,
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
    children,
}: Props) => {
    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />
            <GlobalStyle />
            <Container>
                <Content>
                    <Navigation />
                    <hr />
                    {children}
                </Content>
                <Footer
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    isAnalyticsEnabled={isAnalyticsEnabled}
                    setIsAnalyticsEnabled={setIsAnalyticsEnabled}
                />
                <Preferences />
                <CookieConsent
                    onAccept={() => {
                        enableAnalytics()
                        initAnalytics()
                    }}
                >
                    This website uses cookies
                </CookieConsent>
            </Container>
        </ThemeProvider>
    )
}

export default withFlipAnimation(Layout)
