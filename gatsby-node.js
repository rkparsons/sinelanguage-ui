const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
            allDataJson(filter: { layout: { eq: "artist" } }) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
    result.data.allDataJson.edges.forEach(({ node }) => {
        createPage({
            path: `artist/${node.id}`,
            component: path.resolve(`./src/templates/artist.js`),
            context: {
                slug: node.id,
            },
        })
    })
}
