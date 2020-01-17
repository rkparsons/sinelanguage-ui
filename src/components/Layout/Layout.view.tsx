import { Container, Content, GlobalStyle } from './Layout.style'
import React, { FC, ReactNode } from 'react'
import { grantAnalyticsConsent, initAnalytics } from '~/utils/analytics'

import CookieConsent from 'react-cookie-consent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'
import ReactGA from 'react-ga'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/styles/theme'
import withFlipAnimation from '~/components/withFlipAnimation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

const Layout: FC<Props> = ({ isDarkMode, setIsDarkMode, children }: Props) => {
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
                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <CookieConsent
                    onAccept={() => {
                        grantAnalyticsConsent()
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
