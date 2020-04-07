import { artist, release, siteMetadata } from './cms/schema'

import { deployCMS } from './cms/cicd/deploy'

deployCMS('sinelanguage.net', [siteMetadata, artist, release])
