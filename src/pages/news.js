import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'

const NewsPage = () => (
    <div>
        <Head title="News" />
        <h1>News Page</h1>
        <p>The News Page is accessible by everyone.</p>
    </div>
)

export default () => (
    <Layout>
        <NewsPage />
    </Layout>
)
