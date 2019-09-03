/* bootstrap database in your FaunaDB account */
const faunadb = require('faunadb')
const chalk = require('chalk')
const q = faunadb.query

let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

if (!process.env.GATSBY_FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET found')
    console.log('Please run `netlify addons:create fauna-staging` and redeploy')
    return false
}

console.log(chalk.cyan('Creating your FaunaDB Database...\n'))

createFaunaDB(process.env.GATSBY_FAUNADB_SERVER_SECRET).then(() => {
    console.log('Database created')
})

/* idempotent operation */
function createFaunaDB(key) {
    console.log('Create the database!')
    const client = new faunadb.Client({
        secret: key,
    })

    /* Based on your requirements, change the schema here */
    return client
        .query(
            q.CreateCollection({
                name: 'users',
            })
        )
        .then(
            () =>
                console.log('==> 1. createusers success') ||
                client.query(
                    q.Do(
                        q.CreateCollection({
                            name: 'todos',
                            permissions: {
                                create: q.Collection('users'),
                            },
                        }),
                        q.CreateCollection({
                            name: 'lists',
                            permissions: {
                                create: q.Collection('users'),
                            },
                        })
                    )
                )
        )
        .then(
            () =>
                console.log('==> 2. create todos and lists success') ||
                client.query(
                    q.Do(
                        q.CreateIndex({
                            name: 'users_by_id',
                            source: q.Collection('users'),
                            terms: [
                                {
                                    field: ['data', 'id'],
                                },
                            ],
                            unique: true,
                        }),
                        q.CreateIndex({
                            // this index is optional but useful in development for browsing users
                            name: `all_users`,
                            source: q.Collection('users'),
                        }),
                        q.CreateIndex({
                            name: 'all_todos',
                            source: q.Collection('todos'),
                            permissions: {
                                read: q.Collection('users'),
                            },
                        }),
                        q.CreateIndex({
                            name: 'all_lists',
                            source: q.Collection('lists'),
                            permissions: {
                                read: q.Collection('users'),
                            },
                        }),
                        q.CreateIndex({
                            name: 'todos_by_list',
                            source: q.Collection('todos'),
                            terms: [
                                {
                                    field: ['data', 'list'],
                                },
                            ],
                            permissions: {
                                read: q.Collection('users'),
                            },
                        })
                    )
                )
        )
        .then(console.log('==> 3. create  eveyrthing success') || console.log.bind(console))
        .catch(e => {
            if (e.message === 'instance not unique') {
                console.log('schema already created... skipping')
            } else {
                console.error(e)
                throw e
            }
        })
}
