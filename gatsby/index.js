require('source-map-support').install()
require('ts-node').register()

const { browserAPI } = require('./browserApi')
const { configAPI } = require('./configApi')
const { nodeAPI } = require('./nodeApi')

module.exports = {
    browserAPI,
    configAPI,
    nodeAPI,
}
