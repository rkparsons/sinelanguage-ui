import React, { useState } from 'react'

import View from './MailChimp.view'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default () => {
    const [email, setEmail] = useState('')
    const [result, setResult] = useState('')

    const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResult('')
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const mailChimpResponse = await addToMailchimp(email)

        setResult(mailChimpResponse.result)

        if (mailChimpResponse.result === 'success') {
            setEmail('')
        }
    }

    return (
        <View email={email} result={result} handleSubmit={handleSubmit} updateEmail={updateEmail} />
    )
}
