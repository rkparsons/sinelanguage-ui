import { CallMade } from '@material-ui/icons'
import { Link } from '@material-ui/core'
import React from 'react'
import { SocialIcon } from './IconLink.style'

type ViewProps = {
    url: string
}

export default ({ url }: ViewProps) => {
    return (
        <Link href={url} target="_blank" rel="noopener">
            {url.includes('facebook') ? (
                <SocialIcon className="fa fa-facebook-square" />
            ) : url.includes('spotify') ? (
                <SocialIcon className="fa fa-spotify" />
            ) : url.includes('soundcloud') ? (
                <SocialIcon className="fa fa-soundcloud" />
            ) : url.includes('instagram') ? (
                <SocialIcon className="fa fa-instagram" />
            ) : url.includes('twitter') ? (
                <SocialIcon className="fa fa-twitter" />
            ) : url.includes('youtube') ? (
                <SocialIcon className="fa fa-youtube" />
            ) : (
                <CallMade />
            )}
        </Link>
    )
}
