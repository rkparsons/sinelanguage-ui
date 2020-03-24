const proxy = require('http-proxy-middleware')

export const developMiddleware = (app: any): void => {
    app.use(
        '/.netlify/functions/',
        proxy({
            target: 'http://localhost:9000',
            pathRewrite: {
                '/.netlify/functions/': '',
            },
        })
    )
}
