import { LinkGetProps } from '@reach/router'
import React from 'react'
import View from './NavItem.view'

interface StateProps {
    isPartial: boolean
    route: string
    title: string
}

export default ({ isPartial, route, title }: StateProps) => {
    // const getProps = ({ isCurrent, isPartiallyCurrent }: LinkGetProps) => {
    //     return {
    //         isActive: isCurrent || (props.isPartial && isPartiallyCurrent),
    //     }
    // }

    return <View route={route} title={title} />
}
