import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    LinkArrayField,
    LinkField,
    SymbolField,
    TextField,
} from '../../../cms/models'
import { assetFileSize, unique } from '../../../cms/validations'

import { FluidImageType } from '../../../cms/constants'
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
        new FluidImageField({
            name: 'Image',
            validations: [assetFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
        new LinkArrayField({
            name: 'Tracks',
            link: Track,
        }),
    ],
})
