import { Button, FormControlLabel, IconButton, Switch } from '@material-ui/core'
import { Popup, Title, muiSwitchColour } from './Preferences.style'

import PolicyIcon from '@material-ui/icons/Policy'
import React from 'react'

type ViewProps = {
    isPolicyAccepted: boolean
    onPolicyAccepted: (isPolicyAccepted: boolean) => void
    isAnalyticsEnabled: boolean
    setIsAnalyticsEnabled: (isAnalyticsEnabled: boolean) => void
}

export default ({
    isPolicyAccepted,
    onPolicyAccepted,
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
}: ViewProps) => {
    return (
        <>
            <IconButton>
                <PolicyIcon />
            </IconButton>
            {isPolicyAccepted || (
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
                        label="Secondary"
                    />
                    <Button onClick={() => onPolicyAccepted(true)}>Accept</Button>
                </Popup>
            )}
        </>
    )
}
