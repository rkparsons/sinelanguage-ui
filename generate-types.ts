import { generateTypes } from './cms/cicd/generate-types'
import schema from './src/cms/schema'

generateTypes('./src/cms/types.d.ts', schema)
