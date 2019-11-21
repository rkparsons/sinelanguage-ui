import React, { useState } from 'react'

import View from './NavItem.view'

export default props => {
    const [isActive, setIsActive] = useState()

    const getProps = ({ isCurrent, isPartiallyCurrent }) => {
        setIsActive(isCurrent || (props.isPartial && isPartiallyCurrent))
    }

    return <View {...props} getProps={getProps} isActive={isActive} />
}
