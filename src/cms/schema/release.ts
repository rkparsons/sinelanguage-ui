import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    LinkArrayField,
    LinkField,
    SymbolField,
    TextField,
    VideoField,
} from '../../../cms/models'
import { imageFileSize, unique, videoFileSize } from '../../../cms/validations'

import Artist from './artist'
import { FluidImageType } from '../../../cms/constants'
import { Format } from '../../constants/format'
import Product from './product'
import Track from './track'

export default new ContentfulContentType({
    id: 'release',
    name: 'Release',
    description: '',
    displayField: 'title',
    fields: [
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
            link: Artist,
        }),
        new SymbolField({
            name: 'Original Artist',
            widgetId: 'singleLine',
            helpText:
                'If the original artist is not available above (e.g. for a remix of a non SLR-artist), please provide their name here.',
            required: false,
        }),
        new SymbolField({
            name: 'Format',
            validations: [
                {
                    in: Object.values(Format),
                },
            ],
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            helpText: 'SEO friendly description used when linking to this release.',
        }),
        new FluidImageField({
            name: 'Image',
            validations: [imageFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
        new VideoField({
            name: 'Video',
            validations: [videoFileSize],
            required: false,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
        new LinkArrayField({
            name: 'Tracks',
            link: Track,
            required: false,
        }),
        new LinkArrayField({
            name: 'Products',
            link: Product,
            required: false,
        }),
    ],
})
