import { artist, release, siteMetadata } from './src/cms'

import { deployCMS } from './cms/cicd/deploy'

deployCMS('sinelanguage.net', [siteMetadata, artist, release])
