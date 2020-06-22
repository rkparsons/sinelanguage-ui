import { Box, Slide, Typography } from '@material-ui/core'
import { EmailInput, EmailInputContainer, PopupContainer } from './MailchimpPopup.style'
import React, { useEffect, useState } from 'react'

import IconButton from '~/components/IconButton'
import SVGBoxShadow from '~/components/SVGBoxShadow'
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
                <SVGBoxShadow radius={8} size={3} offset={1} opacity={0.3} />
            </PopupContainer>
        </Slide>
    )
}
