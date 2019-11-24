const path = require(`path`)
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    })

    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /auth0-js/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    await createPagesByType(graphql, actions, 'Artist')
    await createPagesByType(graphql, actions, 'Release')
}

const createPagesByType = async (graphql, actions, type) => {
    const { createPage } = actions
    const queryType = `allPrismic${type}`
    const lowerCaseType = type.toLowerCase()
    const result = await graphql(`
        query {
            ${queryType} {
                edges {
                    node {
                        uid
                    }
                }
            }
        }
    `)
    result.data[queryType].edges.forEach(({ node }) => {
        createPage({
            path: `${lowerCaseType}s/${node.uid}`,
            component: path.resolve(`./src/templates/${lowerCaseType}.js`),
            context: {
                uid: node.uid,
            },
        })
    })
}
