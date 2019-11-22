import { LinkGetProps } from '@reach/router'
import React from 'react'
import View from './NavItem.view'

interface StateProps {
    isPartial: boolean
}

export default (props: StateProps) => {
    const getProps = ({ isCurrent, isPartiallyCurrent }: LinkGetProps) => {
        return {
            isActive: isCurrent || (props.isPartial && isPartiallyCurrent),
        }
    }

    return <View getProps={getProps} />
}
