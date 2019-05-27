const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(
        JSON.parse(
            Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64')
        )
    ),
    databaseURL: 'https://my-firebase-app.firebaseio.com',
})

export function handler(event, context, callback) {
    var idToken = event.headers.authorization.split('Bearer ')[1]

    admin
        .auth()
        .verifyIdToken(idToken)
        .then(function(decodedToken) {
            console.log(`Auth success - uid=${decodedToken.uid}`)
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    msg: 'Hello, World! ' + Math.round(Math.random() * 10),
                }),
            })
        })
        .catch(function(error) {
            console.log(`Auth fail - "${error}"`)
            callback(null, {
                statusCode: 401,
                body: JSON.stringify({
                    msg: 'Unauthorized user',
                }),
            })
        })
}
