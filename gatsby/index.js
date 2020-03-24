require('source-map-support').install()
require('ts-node').register()

const { configAPI } = require('./configApi')
const { nodeAPI } = require('./nodeApi')

module.exports = {
    configAPI,
    nodeAPI,
}
