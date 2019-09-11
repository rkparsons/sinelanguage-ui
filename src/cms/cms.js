import CMS from 'netlify-cms-app'

import { artist } from './collections/artist'
import { event } from './collections/event'
import { podcast } from './collections/podcast'
import { release } from './collections/release'

CMS.init({
    config: {
        load_config_file: false,
        backend: {
            name: 'git-gateway',
            repo: 'rkparsons/sinelanguage-ui',
            branch: 'master',
        },
        media_folder: 'static/images/uploads',
        public_folder: '/images/uploads',
        site_url: 'https://sinelanguage-ui.netlify.com',
        logo_url: 'https://sinelanguage-ui.netlify.com/images/logo.jpg',
        collections: [artist, event, podcast, release],
    },
})
