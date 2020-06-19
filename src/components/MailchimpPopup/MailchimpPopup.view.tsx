import { Box, Grid, Slide, Typography } from '@material-ui/core'
import { EmailInput, EmailInputContainer, InputGrid, PopupContainer } from './MailchimpPopup.style'
import React, { useEffect, useRef, useState } from 'react'

import IconButton from '~/components/IconButton'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(true)
    const {
        isSuccess,
        isInvalid,
        emailInput,
        email,
        onEmailChanged,
        onKeyDown,
        onSubmit,
    } = useMailchimp()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsActive(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [containerRef])

    useEffect(() => {
        if (isSuccess) {
            const hideOnSuccess = setTimeout(() => {
                setIsActive(false)
            }, 2000)

            return () => clearTimeout(hideOnSuccess)
        }
    }, [isSuccess])

    return (
        <div ref={containerRef}>
            <Slide
                direction="left"
                in={isActive}
                style={{ transitionDelay: isActive ? '1000ms' : '0ms' }}
            >
                <PopupContainer elevation={3}>
                    <Typography variant="h5" gutterBottom>
                        Want to hear from us about new releases, mixes and live events?
                    </Typography>
                    {!isSuccess && (
                        <InputGrid container>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    <EmailInputContainer isInvalid={isInvalid}>
                                        <EmailInput
                                            inputRef={emailInput}
                                            type="email"
                                            value={email}
                                            error={isInvalid}
                                            onChange={onEmailChanged}
                                            onKeyDown={onKeyDown}
                                            InputProps={{
                                                color: 'primary',
                                                style: {
                                                    fontSize: 'inherit',
                                                    fontWeight: 'inherit',
                                                    lineHeight: 'inherit',
                                                },
                                            }}
                                            placeholder="EMAIL"
                                        />
                                    </EmailInputContainer>
                                </Typography>
                            </Grid>
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                width="100%"
                                paddingTop={2}
                            >
                                <IconButton
                                    label={
                                        <Typography variant="h5">Join the mailing list</Typography>
                                    }
                                    isLight={false}
                                    isDisabled={isInvalid || !email}
                                    onClick={onSubmit}
                                />
                            </Box>
                        </InputGrid>
                    )}
                    {isSuccess && (
                        <Typography variant="h5" gutterBottom>
                            Thanks for subscribing!
                        </Typography>
                    )}
                </PopupContainer>
            </Slide>
        </div>
    )
}
