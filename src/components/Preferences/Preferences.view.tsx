import { Button, Container, FormControlLabel, IconButton, Switch } from '@material-ui/core'
import { Popup, Title, muiSwitchColour } from './Preferences.style'

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
                <Popup>
                    <Title>
                        <PolicyIcon />
                        Privacy
                    </Title>
                    <FormControlLabel
                        control={
                            <Switch
                                color={muiSwitchColour}
                                checked={isAnalyticsEnabled}
                                onChange={() => setIsAnalyticsEnabled(!isAnalyticsEnabled)}
                            />
                        }
                        label="Analytics"
                    />
                    <Button onClick={() => onPolicyAccepted()}>Accept</Button>
                    <Button onClick={() => setIsPreferencesOpen(false)}>Close</Button>
                </Popup>
            )}
        </>
    )
}
