import { ArrayField, DateField, ImageField, RichTextField, SymbolField, TextField } from '../models'
import { assetFileSize, marks, nodeTypes, unique, url } from '../validations'

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
        new RichTextField({
            name: 'Bio',
            validations: [nodeTypes(['hyperlink']), marks(['italic'])],
        }),
        new DateField({
            name: 'Date',
        }),
        new ArrayField({
            name: 'Socials',
            required: false,
            itemType: 'Symbol',
            itemValidations: [url],
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
