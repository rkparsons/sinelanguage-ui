import { Flipped } from 'react-flip-toolkit'
import LinkShowHide from './DashboardItem.style'
import React from 'react'
import SquareImage from '../SquareImage'

export default ({ type, name, uid, image, filter }) => {
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
