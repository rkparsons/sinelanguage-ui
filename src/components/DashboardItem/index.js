import { Flipped } from 'react-flip-toolkit'
import { Link } from 'gatsby'
import React from 'react'
import SquareImage from '../squareImage'
import styles from './index.module.scss'

export default ({ type, name, uid, image, filter }) => {
    const isVisible = !filter || filter === type

    return (
        <Flipped flipId={uid} stagger opacity translate={false}>
            <Link
                to={`/${type.toLowerCase()}s/${uid}`}
                className={isVisible ? styles.show : styles.hide}
            >
                <SquareImage image={image} />
                <h4>{name}</h4>
            </Link>
        </Flipped>
    )
}
