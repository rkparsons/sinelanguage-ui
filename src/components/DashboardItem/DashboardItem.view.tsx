import React, { ComponentProps } from 'react'

import { Flipped } from 'react-flip-toolkit'
import LinkShowHide from './DashboardItem.style'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    type: string
    name: string
    uid: string
    filter: string
} & ComponentProps<typeof SquareImage>

export default ({ type, name, uid, image, filter }: ViewProps) => {
    return (
        <Flipped flipId={uid} stagger opacity translate={false}>
            <LinkShowHide
                isVisible={!filter || type === filter}
                to={`/${type.toLowerCase()}s/${uid}`}
            >
                <SquareImage image={image} />
                <h4>{name}</h4>
            </LinkShowHide>
        </Flipped>
    )
}
