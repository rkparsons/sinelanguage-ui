import { artist, release, siteMetadata } from './src/cms/schema'

import { generateFragments } from './cms/cicd/generate-fragments'

generateFragments('./src/cms/fragments.ts', [artist, release, siteMetadata])
