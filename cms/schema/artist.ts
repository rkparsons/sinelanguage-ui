import { assetFileSize, marks, nodeTypes, unique } from '../validations'

import Field from '../models/field'
import ImageField from '../models/imageField'

export default {
    id: 'artist',
    name: 'Artist',
    description: '',
    displayField: 'title',
    fields: [
        new Field({
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            validations: [unique],
        }),
        new Field({
            id: 'uid',
            name: 'UID',
            type: 'Symbol',
            validations: [unique],
        }),
        new Field({
            id: 'description',
            name: 'Description',
            type: 'Text',
        }),
        new ImageField({
            id: 'image',
            name: 'Image',
            validations: [assetFileSize],
        }),
        new Field({
            id: 'bio',
            name: 'Bio',
            type: 'RichText',
            validations: [nodeTypes(['hyperlink']), marks(['italic'])],
        }),
        new Field({
            id: 'date',
            name: 'Date',
            type: 'Date',
        }),
        new Field({
            id: 'socials',
            name: 'Socials',
            type: 'Array',
            required: false,
            items: {
                type: 'Symbol',
                validations: [
                    {
                        regexp: {
                            pattern:
                                '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
                            flags: '',
                        },
                        message: 'Must be a valid URL',
                    },
                ],
            },
        }),
    ],
    controls: [
        {
            fieldId: 'uid',
            widgetNamespace: 'builtin',
            widgetId: 'slugEditor',
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
        {
            fieldId: 'socials',
            widgetNamespace: 'builtin',
            widgetId: 'tagEditor',
        },
    ],
}
