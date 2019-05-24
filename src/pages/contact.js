import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'

const ContactPage = () => (
    <div>
        <Head title="Contact" />
        <h1>Contact Page</h1>
        <p>The Contact Page is accessible by everyone.</p>
    </div>
)

export default () => (
    <Layout>
        <ContactPage />
    </Layout>
)
