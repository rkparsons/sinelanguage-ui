const runMigration = require('contentful-migration/built/bin/cli').runMigration

let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

const options = {
    filePath: './migrations/20200127100543_generated_from_diff.ts',
    spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
}

runMigration(options)
    .then(() => console.log('Migration Done!'))
    .catch((e: Error) => console.error(e))
