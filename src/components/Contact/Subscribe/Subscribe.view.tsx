import { Button, Grid, Typography } from '@material-ui/core'
import { EmailInput, InputGrid } from './Subscribe.style'
import React, { useRef, useState } from 'react'

import addToMailchimp from 'gatsby-plugin-mailchimp'
import { validate } from 'email-validator'

export default () => {
    const emailInput = useRef<HTMLInputElement>(null)
    const [isInvalid, setIsInvalid] = useState(false)
    const [email, setEmail] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    type MailChimpResponse = {
        msg: string
        result: string
    }
    const subscribe = () => {
        addToMailchimp(email).then(({ msg, result }: MailChimpResponse) => {
            console.log(msg, result)
            if (result === 'success' || msg.includes('already subscribed')) {
                setEmail('')
                setIsSuccess(true)
            } else {
                setIsInvalid(true)
                emailInput.current?.focus()
            }
        })
    }
    const onSubmit = () => {
        if (validate(email)) {
            subscribe()
        } else {
            setIsInvalid(true)
            emailInput.current?.focus()
        }
    }

    const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isInvalid) {
            setIsInvalid(false)
        }
        setEmail(event.target.value)
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }

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
