import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    RichTextField,
    SymbolArrayField,
    SymbolField,
    TextField,
} from '../../../cms/models'
import { imageFileSize, marks, nodeTypes, unique, url } from '../../../cms/validations'

import { FluidImageType } from '../../../cms/constants'

export default new ContentfulContentType({
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
            validations: [imageFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
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
    ],
})
