import Dashboard from '../components/Dashboard'
import Head from '../components/Head'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <>
        <Head title="Artists" />
        <Dashboard {...data} filter="Artist" />
    </>
)

export const query = graphql`
    {
        ...dashboardFragment
    }
`
