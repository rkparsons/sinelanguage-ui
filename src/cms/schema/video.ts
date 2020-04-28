import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    LinkField,
    SymbolField,
    TextField,
    VideoField,
} from '../../../cms/models'
import { imageFileSize, unique, url, videoFileSize } from '../../../cms/validations'

import Artist from './artist'
import { FluidImageType } from '../../../cms/constants'

export default new ContentfulContentType({
    id: 'video',
    name: 'Video',
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
            name: 'Teaser Video',
            validations: [videoFileSize],
            required: true,
        }),
        new SymbolField({
            id: 'srcURL',
            name: 'YouTube URL',
            validations: [url],
            required: true,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
    ],
})
