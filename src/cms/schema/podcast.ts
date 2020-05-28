import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    LinkField,
    RichTextField,
    SymbolField,
    TextField,
    TrackListField,
} from '../../../cms/models'
import { imageFileSize, marks, nodeTypes, unique } from '../../../cms/validations'

import { FluidImageType } from '../../../cms/constants'
import Track from './track'

export default new ContentfulContentType({
    id: 'podcast',
    name: 'Podcast',
    description: '',
    displayField: 'uid',
    fields: [
        new SymbolField({
            id: 'title',
            name: 'Artist',
        }),
        new SymbolField({
            id: 'uid',
            name: 'Podcast Number',
            validations: [unique],
            widgetId: 'singleLine',
            helpText: 'Use format SLRXXX',
        }),
        new TextField({
            id: 'description',
            name: 'SEO Description',
            widgetId: 'multipleLine',
            helpText: 'Short SEO friendly description used when linking to this podcast.',
        }),
        new RichTextField({
            name: 'Introduction',
            validations: [nodeTypes(['hyperlink']), marks(['italic'])],
            widgetId: 'richTextEditor',
            helpText: 'Longer text to introduce the artist and mix.',
        }),
        new FluidImageField({
            name: 'Image',
            validations: [imageFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
        new LinkField({
            name: 'Track',
            link: Track,
        }),
        new TrackListField({
            name: 'Track List',
        }),
    ],
})
