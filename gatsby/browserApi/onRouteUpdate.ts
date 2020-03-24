import { PluginOptions, RouteUpdateArgs } from 'gatsby'
import { isAnalyticsEnabled, trackPageView } from '../../src/utils/cookies'

export const onRouteUpdate = (args: RouteUpdateArgs, options: PluginOptions) => {
    if (isAnalyticsEnabled()) {
        trackPageView(args.location.pathname)
    }
}
