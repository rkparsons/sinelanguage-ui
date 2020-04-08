import { artist, release, siteMetadata } from './src/cms/schema'

import { deployCMS } from './cms/cicd/deploy-schema'

deployCMS('sinelanguage.net', [artist, release, siteMetadata])
