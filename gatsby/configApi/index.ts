import { GatsbyConfig } from 'gatsby'
import { developMiddleware } from './developMiddleware'
import { plugins } from './plugins'

export const configAPI: GatsbyConfig = {
    plugins,
    developMiddleware,
}
