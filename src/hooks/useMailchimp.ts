import { useRef, useState } from 'react'

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

    function subscribe() {
        addToMailchimp(email).then(({ msg, result }: MailChimpResponse) => {
            console.log(msg, result)
            if (result === 'success' || msg.includes('already subscribed')) {
                setEmail('')
                setIsSuccess(true)
            } else {
                setIsInvalid(true)
                console.log(msg)
                emailInput.current?.focus()
            }
        })
    }

    function onSubmit() {
        if (validate(email)) {
            subscribe()
        } else {
            setIsInvalid(true)
            emailInput.current?.focus()
        }
    }

    function onEmailChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (isInvalid) {
            setIsInvalid(false)
        }
        setEmail(event.target.value)
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }

    return { isSuccess, isInvalid, emailInput, email, onEmailChanged, onKeyDown, onSubmit }
}
