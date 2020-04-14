import { artist, podcast, release, siteMetadata, track } from './src/cms/schema'

import { generateFragments } from './cms/cicd/generate-fragments'

generateFragments('./src/cms/fragments.ts', [artist, podcast, release, siteMetadata, track])
