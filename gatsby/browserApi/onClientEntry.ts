import { BrowserPluginArgs, PluginOptions } from 'gatsby'
import { initAnalytics, isAnalyticsEnabled } from '../../src/utils/cookies'

export const onClientEntry = (args: BrowserPluginArgs, options: PluginOptions) => {
    if (isAnalyticsEnabled()) {
        initAnalytics()
    }
}
