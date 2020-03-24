import { GatsbyBrowser } from 'gatsby'
import { onClientEntry } from './onClientEntry'
import { onRouteUpdate } from './onRouteUpdate'
import { wrapRootElement } from './wrapRootElement'

export const browserAPI: GatsbyBrowser = {
    onClientEntry,
    onRouteUpdate,
    wrapRootElement,
}
