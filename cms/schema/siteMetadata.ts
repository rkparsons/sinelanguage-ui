import { assetFileSize } from './validations/assetFileSize'

export default {
    id: 'siteMetadata',
    name: 'Site Metadata',
    description: 'Metadata used for SEO and when linking to the site.',
    displayField: 'title',
    fields: [
        {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false,
        },
        {
            id: 'url',
            name: 'Url',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [
                {
                    unique: true,
                },
                {
                    in: ['https://sinelanguage.netlify.com', 'https://sinelanguage.net'],
                },
            ],
            disabled: false,
            omitted: false,
        },
        {
            id: 'description',
            name: 'Description',
            type: 'Text',
            localized: false,
            required: true,
            validations: [
                {
                    size: {
                        min: 0,
                        max: 256,
                    },
                    message: 'Description should be no more than 256 characters',
                },
            ],
            disabled: false,
            omitted: false,
        },
        {
            id: 'image',
            name: 'Image',
            type: 'Link',
            localized: false,
            required: true,
            validations: [
                {
                    linkMimetypeGroup: ['image'],
                },
                assetFileSize,
            ],
            disabled: false,
            omitted: false,
            linkType: 'Asset',
        },
    ],
    controls: [
        {
            fieldId: 'description',
            widgetNamespace: 'builtin',
            widgetId: 'multipleLine',
            settings: {
                helpText:
                    'A short description of Sine Language will be used when sharing on social media, and to improve SEO',
            },
        },
    ],
}
