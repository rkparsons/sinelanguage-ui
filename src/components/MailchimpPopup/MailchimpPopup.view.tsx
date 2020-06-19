import { Box, Slide, Typography } from '@material-ui/core'
import { EmailInput, EmailInputContainer, PopupContainer } from './MailchimpPopup.style'
import React, { useEffect, useRef, useState } from 'react'

import IconButton from '~/components/IconButton'
import { Unicode } from '~/constants/unicode'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
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
        if (isSuccess) {
            const hideOnSuccess = setTimeout(() => {
                setIsActive(false)
            }, 2000)

            return () => clearTimeout(hideOnSuccess)
        }
    }, [isSuccess])

    return (
        <Slide
            direction="left"
            in={isActive}
            style={{ transitionDelay: isActive ? '3000ms' : '0ms' }}
        >
            <PopupContainer elevation={3}>
                <Box display="flex">
                    <Typography variant="h3" gutterBottom>
                        Want to hear from us about new releases, mixes and live events?
                    </Typography>
                    <Box marginLeft="20px">
                        <IconButton
                            label={<Typography variant="h3">{Unicode.CLOSE}</Typography>}
                            isLight={false}
                            onClick={() => setIsActive(false)}
                        />
                    </Box>
                </Box>
                <br />
                {!isSuccess && (
                    <>
                        <Typography variant="h3">
                            <EmailInputContainer isInvalid={isInvalid}>
                                <EmailInput
                                    inputRef={emailInput}
                                    type="email"
                                    value={email}
                                    error={isInvalid}
                                    onChange={onEmailChanged}
                                    onKeyDown={onKeyDown}
                                    spellCheck={false}
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
                        <Box display="flex" justifyContent="flex-end" width="100%" paddingTop={2}>
                            <IconButton
                                label={<Typography variant="h3">Join the mailing list</Typography>}
                                isLight={false}
                                isDisabled={isInvalid || !email}
                                onClick={onSubmit}
                            />
                        </Box>
                    </>
                )}
                {isSuccess && (
                    <Typography variant="h3" gutterBottom>
                        Thanks for subscribing!
                    </Typography>
                )}
            </PopupContainer>
        </Slide>
    )
}
