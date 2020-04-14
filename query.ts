import { contentfulManagementToken, contentfulSpaceId } from './env-variables'

import { createClient } from 'contentful-management'

const contentfulApi = createClient({
    accessToken: contentfulManagementToken,
})

console.log(contentfulManagementToken)

contentfulApi
    .getSpace(contentfulSpaceId)
    .then(space => space.getEnvironment('master'))
    .then(environment => environment.getEntries({ content_type: 'track' }))
    .then(entries =>
        entries.items.forEach(entry => {
            console.log(entry.fields.soundCloudID['en-US'])
        })
    )
