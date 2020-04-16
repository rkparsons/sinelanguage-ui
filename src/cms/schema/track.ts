import { ContentfulContentType, SoundCloudMetadataField, SymbolField } from '../../../cms/models'

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
    ],
})
