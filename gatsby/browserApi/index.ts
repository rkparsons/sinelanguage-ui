import { GatsbyBrowser } from 'gatsby'
import { onClientEntry } from './onClientEntry'
import { onRouteUpdate } from './onRouteUpdate'
import { shouldUpdateScroll } from './shouldUpdateScroll'

export const browserAPI: GatsbyBrowser = {
    onClientEntry,
    onRouteUpdate,
    shouldUpdateScroll,
}
