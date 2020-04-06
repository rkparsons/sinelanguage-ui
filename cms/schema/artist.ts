import { assetFileSize } from './validations/assetFileSize'

export default {
    id: 'artist',
    name: 'Artist',
    description: '',
    displayField: 'title',
    fields: [
        {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [
                {
                    unique: true,
                },
            ],
            disabled: false,
            omitted: false,
        },
        {
            id: 'uid',
            name: 'UID',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [
                {
                    unique: true,
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
        {
            id: 'bio',
            name: 'Bio',
            type: 'RichText',
            localized: false,
            required: true,
            validations: [
                {
                    enabledNodeTypes: ['hyperlink'],
                    message: 'Only link to Url nodes are allowed',
                },
                {
                    enabledMarks: ['italic'],
                    message: 'Only italic marks are allowed',
                },
            ],
            disabled: false,
            omitted: false,
        },
        {
            id: 'date',
            name: 'Date',
            type: 'Date',
            localized: false,
            required: true,
            disabled: false,
            omitted: false,
        },
    ],
    controls: [
        {
            fieldId: 'description',
            widgetNamespace: 'builtin',
            widgetId: 'multipleLine',
            settings: {
                helpText: 'SEO friendly description used when linking to this artist.',
            },
        },
        {
            fieldId: 'bio',
            widgetNamespace: 'builtin',
            widgetId: 'richTextEditor',
        },
        {
            fieldId: 'date',
            widgetNamespace: 'builtin',
            widgetId: 'datePicker',
            settings: {
                format: 'dateonly',
            },
        },
    ],
}
