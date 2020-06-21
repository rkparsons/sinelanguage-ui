import { Box, Slide, Typography } from '@material-ui/core'
import { BoxShadow, EmailInput, EmailInputContainer, PopupContainer } from './MailchimpPopup.style'
import React, { useEffect, useState } from 'react'

import IconButton from '~/components/IconButton'
import { Unicode } from '~/constants/unicode'
import useCookies from '~/hooks/useCookies'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
    const { getMailingListCookie, setMailingListCookie } = useCookies()
    const [isActive, setIsActive] = useState(getMailingListCookie() === undefined)
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
                setMailingListCookie(true)
            }, 2000)

            return () => clearTimeout(hideOnSuccess)
        }
    }, [isSuccess])

    function dismissPopup() {
        setIsActive(false)
        setMailingListCookie(false)
    }

    return (
        <Slide direction="left" in={isActive} style={{ transitionDelay: isActive ? '0ms' : '0ms' }}>
            <PopupContainer elevation={3}>
                <Box display="flex" flexDirection="column" height="100%">
                    <Box display="flex" flexGrow={1}>
                        <Typography variant="h5" gutterBottom>
                            WANT TO HEAR FROM US ABOUT NEW RELEASES, MIXES AND LIVE EVENTS?
                        </Typography>
                        <Box marginLeft="20px">
                            <IconButton
                                label={<Typography variant="h5">{Unicode.CLOSE}</Typography>}
                                isLight={false}
                                onClick={dismissPopup}
                                isInactiveShadow={false}
                            />
                        </Box>
                    </Box>
                    <Box>
                        {!isSuccess && (
                            <>
                                <Typography variant="h5">
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
                                <Box
                                    display="flex"
                                    justifyContent="flex-start"
                                    width="100%"
                                    paddingTop={2}
                                >
                                    <IconButton
                                        label={
                                            <Typography variant="h5">
                                                JOIN THE MAILING LIST
                                            </Typography>
                                        }
                                        isLight={false}
                                        isInactiveShadow={false}
                                        isDisabled={isInvalid || !email}
                                        onClick={onSubmit}
                                    />
                                </Box>
                            </>
                        )}
                        {isSuccess && <Typography variant="h5">THANKS FOR SUBSCRIBING!</Typography>}
                    </Box>
                </Box>
                <svg
                    width="533"
                    height="267"
                    style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}
                >
                    <defs>
                        <filter id="f1" x="0" y="0" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite operator="out" in2="SourceGraphic" />
                        </filter>
                    </defs>
                    <rect width="400" height="200" rx="8" fill="black" filter="url(#f1)" />
                </svg>
            </PopupContainer>
        </Slide>
    )
}
