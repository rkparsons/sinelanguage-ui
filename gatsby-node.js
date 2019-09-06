const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

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

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `DataJson`) {
        const slug = createFilePath({ node, getNode }).slice(1, -1)
        const urlParts = slug.split('_')

        createNodeField({
            node,
            name: `id`,
            value: slug,
        })
        createNodeField({
            node,
            name: `url`,
            value: `${urlParts[0]}s/${urlParts[1]}`,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allDataJson {
                edges {
                    node {
                        fields {
                            id
                            url
                        }
                        layout
                    }
                }
            }
        }
    `)
    result.data.allDataJson.edges.forEach(({ node }) => {
        createPage({
            path: `${node.fields.url}`,
            component: path.resolve(`./src/templates/${node.layout}.js`),
            context: {
                id: node.fields.id,
            },
        })
    })
}
