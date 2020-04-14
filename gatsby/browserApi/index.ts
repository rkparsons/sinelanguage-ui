import { GatsbyBrowser } from 'gatsby'
import { onClientEntry } from './onClientEntry'
import { onRouteUpdate } from './onRouteUpdate'
import { shouldUpdateScroll } from './shouldUpdateScroll'
import { wrapRootElement } from './wrapRootElement'

export const browserAPI: GatsbyBrowser = {
    onClientEntry,
    onRouteUpdate,
    wrapRootElement,
    shouldUpdateScroll,
}
