import { ArrayField, DateField, ImageField, RichTextField, SymbolField, TextField } from '../models'
import { assetFileSize, marks, nodeTypes, unique, url } from '../validations'

import { Control } from '../types/control'

const fields = [
    new SymbolField({
        name: 'Title',
        validations: [unique],
        widgetId: 'slugEditor',
    }),
    new SymbolField({
        name: 'UID',
        validations: [unique],
    }),
    new TextField({
        name: 'Description',
        widgetId: 'multipleLine',
        helpText: 'SEO friendly description used when linking to this artist.',
    }),
    new ImageField({
        name: 'Image',
        validations: [assetFileSize],
    }),
    new RichTextField({
        name: 'Bio',
        validations: [nodeTypes(['hyperlink']), marks(['italic'])],
        widgetId: 'richTextEditor',
    }),
    new DateField({
        name: 'Date',
        widgetId: 'datePicker',
        format: 'dateonly',
    }),
    new ArrayField({
        name: 'Socials',
        required: false,
        itemType: 'Symbol',
        itemValidations: [url],
        widgetId: 'tagEditor',
    }),
]

export default {
    id: 'artist',
    name: 'Artist',
    description: '',
    displayField: 'title',
    fields: fields,
    controls: fields.map(x => x.control).filter(control => control !== undefined) as Control[],
}
