import {
    ContentfulContentType,
    DecimalField,
    FluidImageField,
    SymbolField,
    TextField,
} from '../../../cms/models'

import { FluidImageType } from '../../../cms/constants'
import ProductFormat from '../../constants/productFormat'
import { imageFileSize } from '../../../cms/validations'

export default new ContentfulContentType({
    id: 'product',
    name: 'Product',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
            widgetId: 'singleLine',
            helpText: 'Use the form: SINE005 06. Ose - Ellipsis [mp3]',
        }),
        new SymbolField({
            id: 'format',
            name: 'Format',
            validations: [
                {
                    in: Object.values(ProductFormat),
                },
            ],
        }),
        new DecimalField({
            name: 'Price',
            required: false,
        }),
        new DecimalField({
            name: 'Weight Grams',
            required: false,
        }),
        new DecimalField({
            name: 'Width Centimeters',
            required: false,
        }),
        new DecimalField({
            name: 'Length Centimeters',
            required: false,
        }),
        new DecimalField({
            name: 'Height Centimeters',
            required: false,
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            required: false,
            helpText: 'Any additional product info, e.g. 1xLP, 2 Disc, Limited Edition',
        }),
        new SymbolField({
            name: 'File GUID',
            widgetId: 'singleLine',
            helpText: 'The digital download identier located in the Snipcart dashboard',
            required: false,
        }),
        new FluidImageField({
            name: 'Image',
            validations: [imageFileSize],
            required: false,
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
    ],
})
