import { artist, release, siteMetadata } from './src/cms/schema'

import { generateTypes } from './cms/cicd/generate-types'

generateTypes('./src/cms/types.d.ts', [artist, release, siteMetadata])
