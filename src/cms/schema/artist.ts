import {
    DateField,
    FluidImageField,
    RichTextField,
    SymbolArrayField,
    SymbolField,
    TextField,
} from '../../../cms/models'
import { assetFileSize, marks, nodeTypes, unique, url } from '../../../cms/validations'

import { Control } from '../../../cms/types/control'

const fields = [
    new SymbolField({
        name: 'Title',
        validations: [unique],
    }),
    new SymbolField({
        id: 'uid',
        name: 'Unique ID',
        validations: [unique],
        widgetId: 'slugEditor',
    }),
    new TextField({
        name: 'Description',
        widgetId: 'multipleLine',
        helpText: 'SEO friendly description used when linking to this artist.',
    }),
    new FluidImageField({
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
    new SymbolArrayField({
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
