import { generateFragments } from './cms/cicd/generate-fragments'
import schema from './src/cms/schema'

generateFragments('./src/cms/fragments.ts', schema)
