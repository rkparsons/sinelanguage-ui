import { ContentType } from 'contentful-management/typings/contentType'
import { createClient } from 'contentful-management'

let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

var client = createClient({
    accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN!,
})

const blogPost = {
    name: 'Post auto update',
    description: '',
    displayField: 'title',
    fields: [
        {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            localized: false,
            required: false,
            validations: [],
            disabled: false,
            omitted: false,
        },
        {
            id: 'body',
            name: 'Body',
            type: 'RichText',
            localized: false,
            required: false,
            validations: [
                {
                    nodes: {
                        'embedded-entry-block': [
                            {
                                linkContentType: ['imageGallery', 'linkPreview'],
                            },
                        ],
                    },
                },
                {
                    enabledNodeTypes: [
                        'heading-1',
                        'heading-2',
                        'heading-3',
                        'heading-4',
                        'heading-5',
                        'heading-6',
                        'ordered-list',
                        'unordered-list',
                        'hr',
                        'blockquote',
                        'embedded-entry-block',
                        'embedded-asset-block',
                        'hyperlink',
                        'entry-hyperlink',
                        'asset-hyperlink',
                    ],
                    message:
                        'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, and link to asset nodes are allowed',
                },
            ],
            disabled: false,
            omitted: false,
        },
    ],
}

client
    .getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID!)
    .then(space => space.getEnvironment('master'))
    .then(environment => environment.getContentType('blogPost'))
    //.then(contentType => contentType.unpublish())
    .then(contentType => {
        contentType.name = blogPost.name
        contentType.description = blogPost.description
        contentType.displayField = blogPost.displayField
        contentType.fields = blogPost.fields

        contentType
            .update()
            .catch(console.error)
            .then(updatedContentType => {
                console.log('Update was successful')

                if (updatedContentType) {
                    updatedContentType.publish().then(contentType => {
                        console.log('Publish was successful')
                    })
                }
            })
    })
