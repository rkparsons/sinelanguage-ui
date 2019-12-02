import Dashboard from '~/components/Dashboard'
import React from 'react'
import { graphql } from 'gatsby'
import useNewsQuery from '~/hooks/useNewsQuery'

export default ({ data }) => {
    const news = useNewsQuery()
    console.log(news)

    return <Dashboard {...data} />
}

export const query = graphql`
    {
        ...dashboardFragment
    }
`
