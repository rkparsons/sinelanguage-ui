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
    const { createPage } = actions

    const result = await graphql(`
        query {
            allContentfulArtist {
                nodes {
                    uid
                }
            }
        }
    `)

    createPage({
        path: `artists`,
        component: path.resolve(`./src/pages/index.tsx`),
        context: {},
    })

    result.data.allContentfulArtist.nodes.forEach(({ uid }) => {
        createPage({
            path: `artists/${uid}`,
            component: path.resolve(`./src/templates/artist.tsx`),
            context: {
                uid,
            },
        })
    })
}
