import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import { getProfile } from '../utils/auth'

export default () => (
    <Layout>
        <div>
            <Head title="Account" />
            <h5>Hello {getProfile().name}</h5>
        </div>
    </Layout>
)
