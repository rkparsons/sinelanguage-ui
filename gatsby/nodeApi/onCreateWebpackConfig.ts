import { CreateWebpackConfigArgs } from 'gatsby'

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

export const onCreateWebpackConfig = ({ stage, loaders, actions }: CreateWebpackConfigArgs) => {
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
    } else if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        })
    }
}
