import { ContentfulContentType, IntegerField, SymbolField } from '../../../cms/models'

export default new ContentfulContentType({
    id: 'track',
    name: 'Track',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
        }),
        new IntegerField({
            id: 'soundCloudID',
            name: 'SoundCloud ID',
            format: 'dateonly',
            helpText: 'This is used to get streaming metadata from the SoundCloud API',
        }),
    ],
})
