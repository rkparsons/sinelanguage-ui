import {
    Action,
    AspectRatio,
    Content,
    EmailInput,
    EmailInputContainer,
    ErrorMessage,
    InputGrid,
    Title,
} from './NewsletterCard.style'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import { Grid } from '@material-ui/core'
import IconButton from '~/components/IconButton'
import React from 'react'
import ResponsiveTypography from '~/components/ResponsiveTypography'
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
                        <ResponsiveTypography mobile="body1" desktop="h5">
                            {isSuccess
                                ? 'THANKS FOR SUBSCRIBING!'
                                : 'WANT TO HEAR FROM US ABOUT NEW RELEASES?'}
                        </ResponsiveTypography>
                    </Title>
                    {!isSuccess && (
                        <InputGrid container>
                            <Grid item xs={12}>
                                <ErrorMessage>
                                    <ResponsiveTypography
                                        mobile="body1"
                                        desktop="h5"
                                        gutterBottom={true}
                                    >
                                        {isInvalid ? 'Please enter a valid email' : ''}
                                    </ResponsiveTypography>
                                </ErrorMessage>
                                <EmailInputContainer isInvalid={isInvalid}>
                                    <EmailInput
                                        inputRef={emailInput}
                                        type="email"
                                        value={email}
                                        onChange={onEmailChanged}
                                        onKeyDown={onKeyDown}
                                        spellCheck={false}
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                fontSize: 'inherit',
                                                fontWeight: 'inherit',
                                                lineHeight: 'inherit',
                                            },
                                        }}
                                        placeholder="EMAIL"
                                    />
                                </EmailInputContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <Action>
                                    <IconButton
                                        label={
                                            <ResponsiveTypography mobile="body1" desktop="h5">
                                                JOIN THE MAILING LIST
                                            </ResponsiveTypography>
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
