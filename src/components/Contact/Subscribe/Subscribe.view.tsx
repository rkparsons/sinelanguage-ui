import { Button, Grid, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import { EmailInput } from './Subscribe.style'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default () => {
    const [response, setResponse] = useState('')
    const emailInput = useRef<HTMLInputElement>(null)
    const [isInvalid, setIsInvalid] = useState(false)
    const [email, setEmail] = useState('')

    type MailChimpResponse = {
        msg: string
        result: string
    }
    const subscribe = () => {
        addToMailchimp(email).then(({ result }: MailChimpResponse) => {
            if (result === 'error') {
                setIsInvalid(true)
                emailInput.current?.focus()
            }
            setResponse(result)
        })
    }
    const onSubmit = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmail('')
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
            <Grid container>
                <Grid item xs={3}>
                    <EmailInput
                        inputRef={emailInput}
                        label="EMAIL"
                        type="email"
                        value={email}
                        error={isInvalid}
                        onChange={onEmailChanged}
                        onKeyDown={onKeyDown}
                    />
                </Grid>
                <Grid xs={9} />
                <Grid item xs={3} style={{ textAlign: 'right' }}>
                    <Button
                        color="secondary"
                        size="large"
                        disabled={isInvalid || !email}
                        onClick={onSubmit}
                    >
                        SUBMIT
                    </Button>
                </Grid>
                <Grid item xs={9} />
            </Grid>
            <Typography>{response}</Typography>
        </>
    )
}
