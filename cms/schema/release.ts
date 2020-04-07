import { DateField, ImageField, LinkField, SymbolField, TextField } from '../models'
import { assetFileSize, iframe, unique } from '../validations'

import { Control } from '../types/control'

const fields = [
    new SymbolField({
        name: 'Title',
        validations: [unique],
    }),
    new SymbolField({
        id: 'uid',
        name: 'Catalog Number',
        validations: [unique],
        widgetId: 'singleLine',
        helpText: 'Use format SINEXXX',
    }),
    new LinkField({
        name: 'Artist',
        widgetId: 'entryCardEditor',
        linkId: 'artist',
    }),
    new SymbolField({
        name: 'Format',
        validations: [
            unique,
            {
                in: ['Digital EP', 'Single', '12" Vinyl / Digital', 'Video'],
            },
        ],
    }),
    new TextField({
        name: 'Description',
        widgetId: 'multipleLine',
        helpText: 'SEO friendly description used when linking to this release.',
    }),
    new ImageField({
        name: 'Image',
        validations: [assetFileSize],
    }),
    new DateField({
        name: 'Date',
        widgetId: 'datePicker',
        format: 'dateonly',
    }),
    new TextField({
        name: 'Embedded Player',
        required: false,
        validations: [iframe],
        widgetId: 'multipleLine',
        helpText: 'Copy and paste the entire iframe tag for your embedded media',
    }),
]

export default {
    id: 'release',
    name: 'Release',
    description: '',
    displayField: 'title',
    fields: fields,
    controls: fields.map(x => x.control).filter(control => control !== undefined) as Control[],
}
