import React from 'react'
import Socials from '~/components/Socials'
import { Typography } from '@material-ui/core'

export default () => {
    const urls = [
        'https://open.spotify.com/user/z7bo9l4v1zhs8ho41mokild6k?si=HsUK3NEtTKGRYDK587pqJw',
        'https://sinelangrec.bandcamp.com/',
        'https://www.facebook.com/sinelangrec',
        'https://www.youtube.com/channel/UCdiCDP6RInwg37a_K__kzxw',
        'https://soundcloud.com/sinelangrec',
        'https://www.instagram.com/sinelangrec/',
    ]
    return (
        <>
            <Typography variant="h3" gutterBottom>
                FOLLOW
            </Typography>
            <br />
            <Socials urls={urls} />
        </>
    )
}
