import { artist, podcast, release, siteMetadata, track } from './src/cms/schema'

import { deployCMS } from './cms/cicd/deploy-schema'

deployCMS('sinelanguage.net', [artist, podcast, release, siteMetadata, track])
