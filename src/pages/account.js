import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import { getProfile } from '../utils/auth'

export default () => (
    <Layout>
        <div>
            <Head title="Account" />
            <h5>Hello {getProfile().name}</h5>
            <button
                onClick={e => {
                    e.preventDefault()

                    fetch('/.netlify/functions/hello')
                        .then(response => response.json())
                        .then(json => console.log(json))
                }}
            >
                Call Lambda
            </button>
        </div>
    </Layout>
)
