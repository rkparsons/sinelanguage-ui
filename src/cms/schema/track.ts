import {
    ContentfulContentType,
    LinkArrayField,
    SoundCloudMetadataField,
    SymbolField,
} from '../../../cms/models'

import Product from './product'

export default new ContentfulContentType({
    id: 'track',
    name: 'Track',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
        }),
        new SoundCloudMetadataField({
            name: 'Metadata',
            widgetId: 'bPHguxTpAJ71ExuaDuSyU',
        }),
        new LinkArrayField({
            name: 'Products',
            link: Product,
            required: false,
        }),
    ],
})
