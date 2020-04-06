import { assetFileSize } from './validations/assetFileSize'

export default {
    id: 'release',
    name: 'Release',
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
            id: 'artist',
            name: 'Artist',
            type: 'Link',
            localized: false,
            required: true,
            validations: [
                {
                    linkContentType: ['artist'],
                },
            ],
            disabled: false,
            omitted: false,
            linkType: 'Entry',
        },
        {
            id: 'format',
            name: 'Format',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [
                {
                    unique: true,
                },
                {
                    in: ['Digital EP', 'Single', '12" Vinyl / Digital'],
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
            fieldId: 'uid',
            widgetNamespace: 'builtin',
            widgetId: 'slugEditor',
        },
        {
            fieldId: 'artist',
            widgetNamespace: 'builtin',
            widgetId: 'entryCardEditor',
        },
        {
            fieldId: 'description',
            widgetNamespace: 'builtin',
            widgetId: 'multipleLine',
            settings: {
                helpText: 'SEO friendly description used when linking to this artist.',
            },
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
