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
            name: 'Catalog Number',
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
        {
            id: 'embeddedPlayer',
            name: 'Embedded Player',
            type: 'Text',
            localized: false,
            required: false,
            validations: [
                {
                    regexp: {
                        pattern:
                            // prettier-ignore
                            '<iframe .*<\/iframe>$',
                        flags: '',
                    },
                    message:
                        'Should be valid HTML iframe tag with src attribute, e.g. <iframe src="https://example.com/embed/1234"></iframe>',
                },
            ],
            disabled: false,
            omitted: false,
        },
    ],
    controls: [
        {
            fieldId: 'uid',
            widgetNamespace: 'builtin',
            widgetId: 'singleLine',
            settings: {
                helpText: 'Use format SINEXXX',
            },
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
        {
            fieldId: 'embeddedPlayer',
            widgetNamespace: 'builtin',
            widgetId: 'multipleLine',
            settings: {
                helpText: 'Copy and paste the entire iframe tag for your embedded media',
            },
        },
    ],
}
