require('source-map-support').install()
require('ts-node').register()

const { configAPI } = require('./configApi')
// const { nodeAPI } = require('./nodeApi')
// const { browserAPI } = require('./browserAPI')

module.exports = {
    configAPI,
    // nodeAPI,
    // browserAPI,
}
