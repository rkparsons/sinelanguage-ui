import { ContentfulContentType, DecimalField, SymbolField, TextField } from '../../../cms/models'

import ProductFormat from '../../constants/productFormat'

export default new ContentfulContentType({
    id: 'product',
    name: 'Product',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
            widgetId: 'singleLine',
            helpText: 'Use the form: artist - release (format)',
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
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            helpText: 'Any additional product info, e.g. 1xLP, Digital download.',
        }),
        new SymbolField({
            name: 'File GUID',
            widgetId: 'singleLine',
            helpText: 'The digital download identier located in the Snipcart dashboard',
            required: false,
        }),
    ],
})
