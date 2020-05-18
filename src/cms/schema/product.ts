import { ContentfulContentType, DecimalField, SymbolField, TextField } from '../../../cms/models'

import ProductFormat from '../../constants/productFormat'

export default new ContentfulContentType({
    id: 'product',
    name: 'Product',
    description: '',
    displayField: 'description',
    fields: [
        new SymbolField({
            id: 'format',
            name: 'Format',
            validations: [
                {
                    in: Object.values(ProductFormat),
                },
            ],
        }),
        // todo: remove description?
        new TextField({
            name: 'Description',
            widgetId: 'singleLine',
            helpText: 'Short description used in the shopping cart.',
        }),
        new DecimalField({
            name: 'Price',
        }),
    ],
})
