import { artist, event, podcast, release, siteMetadata, track } from './src/cms/schema'

import { deployCMS } from './cms/cicd/deploy-schema'

deployCMS('sinelanguage.net', [artist, event, podcast, release, siteMetadata, track])
