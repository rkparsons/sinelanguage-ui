import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    ImageField,
    LinkField,
    RichTextField,
    SymbolArrayField,
    SymbolField,
    TextField,
    TrackListField,
} from '../../../cms/models'
import { imageFileSize, marks, nodeTypes, unique, url } from '../../../cms/validations'

import Artist from './artist'
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
        new LinkField({
            name: 'Related Artist',
            widgetId: 'entryCardEditor',
            link: Artist,
            required: false
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
        new ImageField({
            name: 'Wide Image',
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
        new SymbolArrayField({
            name: 'Socials',
            required: false,
            itemType: 'Symbol',
            itemValidations: [url],
            widgetId: 'tagEditor',
        }),
    ],
})
