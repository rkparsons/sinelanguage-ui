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
        })
    }

    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    })
}
