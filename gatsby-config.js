module.exports = {
    siteMetadata: {
        title: 'Sine Language Records',
        author: 'Richard Parsons',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: '@import "src/styles/base/_settings.scss";',
                includePaths: ['src/components'],
            },
        },
    ],
}
