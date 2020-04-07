import { DateField, Field, ImageField, SymbolField, TextField } from '../models'
import { assetFileSize, marks, nodeTypes, unique } from '../validations'

export default {
    id: 'artist',
    name: 'Artist',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
            validations: [unique],
        }),
        new SymbolField({
            name: 'UID',
            validations: [unique],
        }),
        new TextField({
            name: 'Description',
        }),
        new ImageField({
            name: 'Image',
            validations: [assetFileSize],
        }),
        new Field({
            name: 'Bio',
            type: 'RichText',
            validations: [nodeTypes(['hyperlink']), marks(['italic'])],
        }),
        new DateField({
            name: 'Date',
        }),
        new Field({
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
