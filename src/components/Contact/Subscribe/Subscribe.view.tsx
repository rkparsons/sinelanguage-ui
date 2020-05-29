import { Button, Grid, Typography } from '@material-ui/core'
import { EmailInput, InputGrid } from './Subscribe.style'

import React from 'react'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
    const {
        isSuccess,
        isInvalid,
        emailInput,
        email,
        onEmailChanged,
        onKeyDown,
        onSubmit,
    } = useMailchimp()

    return (
        <>
            <Typography variant="h3" gutterBottom>
                NEWSLETTER
            </Typography>
            {!isSuccess && (
                <InputGrid container>
                    <Grid item xs={12}>
                        <EmailInput
                            inputRef={emailInput}
                            label={isInvalid ? 'Please enter a valid email' : 'EMAIL'}
                            type="email"
                            value={email}
                            error={isInvalid}
                            onChange={onEmailChanged}
                            onKeyDown={onKeyDown}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'right' }}>
                        <Button
                            color="secondary"
                            size="large"
                            disabled={isInvalid || !email}
                            onClick={onSubmit}
                        >
                            SUBMIT
                        </Button>
                    </Grid>
                </InputGrid>
            )}
            {isSuccess && (
                <Typography variant="h3" gutterBottom>
                    Thanks for subscribing!
                </Typography>
            )}
        </>
    )
}
