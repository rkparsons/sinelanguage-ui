import { deployCMS } from './cms/cicd/deploy-schema'
import schema from './src/cms/schema'

deployCMS('sinelanguage.net', schema)
