import {
    faBandcamp,
    faFacebookSquare,
    faInstagram,
    faMixcloud,
    faSoundcloud,
    faSpotify,
    faTwitch,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

import ExternalLink from '~/components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Social } from '~/constants/social'
import { faUser } from '@fortawesome/free-solid-svg-icons'

type ViewProps = {
    url: string
}

export default ({ url }: ViewProps) => {
    const faIcon = url.includes(Social.FACEBOOK)
        ? faFacebookSquare
        : url.includes(Social.SPOTIFY)
        ? faSpotify
        : url.includes(Social.BANDCAMP)
        ? faBandcamp
        : url.includes(Social.SOUNDCLOUD)
        ? faSoundcloud
        : url.includes(Social.MIXCLOUD)
        ? faMixcloud
        : url.includes(Social.INSTAGRAM)
        ? faInstagram
        : url.includes(Social.TWITTER)
        ? faTwitter
        : url.includes(Social.YOUTUBE)
        ? faYoutube
        : url.includes(Social.TWITCH)
        ? faTwitch
        : faUser

    return <ExternalLink href={url} icon={<FontAwesomeIcon icon={faIcon} />} />
}
