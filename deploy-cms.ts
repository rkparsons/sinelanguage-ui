import { artist, release, siteMetadata } from './src/cms/schema'

import { deployCMS } from './cms/cicd/deploy'

deployCMS('sinelanguage.net', [siteMetadata, artist, release])
