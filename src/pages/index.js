import Dashboard from '~/components/Dashboard'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
    return <Dashboard {...data} />
}

export const query = graphql`
    {
        ...dashboardFragment
    }
`
