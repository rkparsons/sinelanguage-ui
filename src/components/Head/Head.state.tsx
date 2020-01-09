import React, { ComponentProps } from 'react'

import View from './Head.view'
import useSiteMetadata from '~/hooks/useSiteMetadata'

type StateProps = Omit<ComponentProps<typeof View>, 'siteMetadata'>

export default (props: StateProps) => {
    const siteMetadata = useSiteMetadata()
    return <View {...props} siteMetadata={siteMetadata} />
}
