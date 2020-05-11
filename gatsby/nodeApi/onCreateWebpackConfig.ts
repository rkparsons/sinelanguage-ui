import { CreateWebpackConfigArgs } from 'gatsby'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export const onCreateWebpackConfig = ({ stage, loaders, actions }: CreateWebpackConfigArgs) => {
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

    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
            module: {
                rules: [
                    {
                        test: /react-refresh-webpack-plugin/,
                        use: [loaders.js()],
                    },
                ],
            },
        })
    }

    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },

        node: {
            fs: 'empty',
        },
    })
}
