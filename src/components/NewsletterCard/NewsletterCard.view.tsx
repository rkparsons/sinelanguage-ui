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
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import IconButton from '~/components/IconButton'
import React from 'react'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
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
                        <Typography variant={isMobile ? 'body1' : 'h5'}>
                            {isSuccess
                                ? 'THANKS FOR SUBSCRIBING!'
                                : 'WANT TO HEAR FROM US ABOUT NEW RELEASES?'}
                        </Typography>
                    </Title>
                    {!isSuccess && (
                        <InputGrid container>
                            <Grid item xs={12}>
                                <ErrorMessage>
                                    <Typography variant={isMobile ? 'body1' : 'h5'} gutterBottom>
                                        {isInvalid ? 'Please enter a valid email' : ''}
                                    </Typography>
                                </ErrorMessage>
                                <Typography variant={isMobile ? 'body1' : 'h5'} component="span">
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
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Action>
                                    <IconButton
                                        label={
                                            <Typography variant={isMobile ? 'body1' : 'h5'}>
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
