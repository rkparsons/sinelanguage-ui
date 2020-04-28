import { generateNodes } from './cms/cicd/generate-nodes'
import schema from './src/cms/schema'

generateNodes('./src/cms/nodes.ts', schema)
