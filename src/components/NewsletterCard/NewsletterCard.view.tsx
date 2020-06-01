import { Action, AspectRatio, Content, EmailInput, InputGrid, Title } from './NewsletterCard.style'
import { Grid, Typography } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import IconButton from '~/components/IconButton'
import React from 'react'
import { isMobileOnly } from 'react-device-detect'
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
        <Column widthMultiplier={2}>
            <AspectRatio>
                <Content>
                    <Title>
                        <Typography variant={isMobileOnly ? 'body1' : 'h5'}>
                            {isSuccess
                                ? 'THANKS FOR SUBSCRIBING!'
                                : 'WANT TO HEAR FROM US ABOUT NEW RELEASES?'}
                        </Typography>
                    </Title>
                    {!isSuccess && (
                        <InputGrid container>
                            <Grid item xs={12}>
                                <EmailInput
                                    inputRef={emailInput}
                                    type="email"
                                    value={email}
                                    error={isInvalid}
                                    onChange={onEmailChanged}
                                    onKeyDown={onKeyDown}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: isMobileOnly ? '1rem' : '1.35rem' },
                                    }}
                                    placeholder={isInvalid ? 'Please enter a valid email' : 'EMAIL'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Action>
                                    <IconButton
                                        label={
                                            <Typography variant={isMobileOnly ? 'body1' : 'h5'}>
                                                JOIN THE MAILING LIST
                                            </Typography>
                                        }
                                        onClick={onSubmit}
                                        isLight={false}
                                        isDisabled={isInvalid || !email}
                                        disabledOpacity={1}
                                    />
                                </Action>
                            </Grid>
                        </InputGrid>
                    )}
                </Content>
            </AspectRatio>
            <ContentCardDetail>
                <></>
            </ContentCardDetail>
        </Column>
    )
}
