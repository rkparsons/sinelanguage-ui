import { AcceptButton, PopupContainer, PopupContent, Row, Title, Toggle } from './Preferences.style'
import { Button, IconButton, Typography } from '@material-ui/core'

import BarChartIcon from '@material-ui/icons/BarChart'
import BuildIcon from '@material-ui/icons/Build'
import PersonIcon from '@material-ui/icons/Person'
import PolicyIcon from '@material-ui/icons/Policy'
import React from 'react'

type ViewProps = {
    isPolicyAccepted: boolean
    onPolicyAccepted: () => void
    isPreferencesOpen: boolean
    setIsPreferencesOpen: (isPreferencesOpen: boolean) => void
    isAnalyticsEnabled: boolean
    setIsAnalyticsEnabled: (isAnalyticsEnabled: boolean) => void
}

export default ({
    isPolicyAccepted,
    onPolicyAccepted,
    isPreferencesOpen,
    setIsPreferencesOpen,
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
}: ViewProps) => {
    return (
        <>
            <IconButton onClick={() => setIsPreferencesOpen(!isPreferencesOpen)}>
                <PolicyIcon />
            </IconButton>
            {isPreferencesOpen && (
                <PopupContainer>
                    <PopupContent>
                        <Title>Privacy Notice</Title>
                        <Row>
                            <Typography>
                                This website uses cookies to provide a better browsing experience.
                            </Typography>
                        </Row>
                        <Row>
                            <BuildIcon />
                            <Typography>Necessary</Typography>
                            <Toggle checked={true} disabled />
                        </Row>
                        <Row>
                            <PersonIcon />
                            <Typography>Preferences</Typography>
                            <Toggle />
                        </Row>
                        <Row>
                            <BarChartIcon />
                            <Typography>Statistics</Typography>
                            <Toggle
                                checked={isAnalyticsEnabled}
                                onChange={() => setIsAnalyticsEnabled(!isAnalyticsEnabled)}
                            />
                        </Row>
                        <Row>
                            <Button onClick={() => setIsPreferencesOpen(false)}>Close</Button>
                            <AcceptButton onClick={() => onPolicyAccepted()}>Accept</AcceptButton>
                        </Row>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    )
}
