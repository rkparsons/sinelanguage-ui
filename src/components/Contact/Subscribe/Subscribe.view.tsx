import { Box, Grid, Typography } from '@material-ui/core'
import { EmailInput, InputGrid } from './Subscribe.style'

import IconButton from '~/components/IconButton'
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
                        <Typography variant="h3">
                            <EmailInput
                                inputRef={emailInput}
                                type="email"
                                value={email}
                                error={isInvalid}
                                onChange={onEmailChanged}
                                onKeyDown={onKeyDown}
                                InputProps={{
                                    style: {
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        lineHeight: 'inherit',
                                    },
                                }}
                                placeholder="EMAIL"
                            />
                        </Typography>
                    </Grid>
                    <Box display="flex" justifyContent="flex-end" width="100%">
                        <IconButton
                            label={
                                <Typography variant="h3" color="secondary">
                                    SUBMIT
                                </Typography>
                            }
                            isLight={true}
                            isDisabled={isInvalid || !email}
                            onClick={onSubmit}
                        />
                    </Box>
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
