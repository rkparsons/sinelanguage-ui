import { artist, event, podcast, release, siteMetadata, track } from './src/cms/schema'

import { generateNodes } from './cms/cicd/generate-nodes'

generateNodes('./src/cms/nodes.ts', [artist, event, podcast, release, siteMetadata, track])
