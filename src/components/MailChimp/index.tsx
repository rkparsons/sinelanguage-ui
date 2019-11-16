import React, { Fragment } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailChimp extends React.Component {
    state = {
        email: '',
        listFields: {},
        result: undefined,
        msg: undefined,
    }

    updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ result: undefined })
        this.setState({ msg: undefined })
        this.setState({ email: event.target.value })
    }

    handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { result, msg } = await addToMailchimp(this.state.email, this.state.listFields)

        this.setState({ result })
        this.setState({ msg })

        if (result === 'success') {
            this.setState({ email: '' })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.result === 'success' && <span>Thanks for subscribing!</span>}
                {this.state.result === 'success' || (
                    <Fragment>
                        <input type="text" value={this.state.email} onChange={this.updateEmail} />
                        <button type="submit">Subscribe</button>
                    </Fragment>
                )}
                {this.state.result === 'error' && (
                    <p>
                        <span>Please enter a valid email address</span>
                    </p>
                )}
            </form>
        )
    }
}

export default MailChimp
