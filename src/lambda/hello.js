const admin = require('firebase-admin')

console.log(
    'service account encoded: ',
    process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
)

// admin.initializeApp({
//     credential: admin.credential.cert(
//         JSON.parse(
//             new Buffer(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64')
//         )
//     ),
//     databaseURL: 'https://my-firebase-app.firebaseio.com',
// })

export function handler(event, context, callback) {
    var idToken = event.headers.authorization.split('Bearer ')[1]

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            msg: 'ok',
        }),
    })

    // admin
    //     .auth()
    //     .verifyIdToken(idToken)
    //     .then(function(decodedToken) {
    //         console.log(`Auth success - uid=${decodedToken.uid}`)
    //         callback(null, {
    //             statusCode: 200,
    //             body: JSON.stringify({
    //                 msg: 'Hello, World! ' + Math.round(Math.random() * 10),
    //             }),
    //         })
    //     })
    //     .catch(function(error) {
    //         console.log(`Auth fail - "${error}"`)
    //         callback(null, {
    //             statusCode: 401,
    //             body: JSON.stringify({
    //                 msg: 'Unauthorized user',
    //             }),
    //         })
    //     })
}
