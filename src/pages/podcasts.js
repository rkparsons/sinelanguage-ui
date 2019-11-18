import React from 'react'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => <Dashboard {...data} filter="Podcast" />

export const query = graphql`
    {
        ...dashboardFragment
    }
`
