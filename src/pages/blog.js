import React, { Fragment } from 'react'
import Head from '../components/Head'
import Layout from '../components/layout'

const BlogPage = () => (
    <Fragment>
        <Head title="Blog" />
        <h1>Blog</h1>
        <p>Posts will show up here later on</p>
    </Fragment>
)

export default () => (
    <Layout>
        <BlogPage />
    </Layout>
)
