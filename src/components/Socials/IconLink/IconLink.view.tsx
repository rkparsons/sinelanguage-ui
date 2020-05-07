import ExternalLink from '~/components/ExternalLink'
import { Icon } from '@material-ui/core'
import React from 'react'
import { Social } from '~/constants/social'

type ViewProps = {
    url: string
}

export default ({ url }: ViewProps) => {
    const iconClass = url.includes(Social.FACEBOOK)
        ? 'fa fa-facebook-square'
        : url.includes(Social.SPOTIFY)
        ? 'fa fa-spotify'
        : url.includes(Social.SOUNDCLOUD)
        ? 'fa fa-soundcloud'
        : url.includes(Social.INSTAGRAM)
        ? 'fa fa-instagram'
        : url.includes(Social.TWITTER)
        ? 'fa fa-twitter'
        : url.includes(Social.YOUTUBE)
        ? 'fa fa-youtube'
        : 'fa fa-user'

    return <ExternalLink href={url} icon={<Icon className={iconClass} />} />
}
