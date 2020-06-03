import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    LinkField,
    RichTextField,
    SymbolField,
    TextField,
    VideoField,
} from '../../../cms/models'
import {
    imageFileSize,
    marks,
    nodeTypes,
    unique,
    url,
    videoFileSize,
} from '../../../cms/validations'

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
        new SymbolField({
            name: 'Original Artist',
            widgetId: 'singleLine',
            helpText:
                'If the original artist is not available above (e.g. for a remix of a non SLR-artist), please provide their name here.',
            required: false,
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            helpText: 'SEO friendly description used when linking to this release.',
        }),
        new RichTextField({
            name: 'Credits',
            validations: [nodeTypes(['hyperlink']), marks([])],
            widgetId: 'richTextEditor',
            helpText: 'Please use a single line in the format: Name1 (Role1), Name2 (Role2)...',
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
