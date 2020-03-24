require('source-map-support').install()
require('ts-node').register()

const { configAPI } = require('./configApi')

module.exports = {
    configAPI,
}
