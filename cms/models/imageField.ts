import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

export default class ImageField extends ContentfulField {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        widgetId,
        helpText,
        format,
    }: SubFieldProps) {
        super({
            id,
            name,
            type: 'Link',
            localized,
            required,
            validations,
            disabled,
            omitted,
            widgetId,
            helpText,
            format,
        })
        this.contentFields.linkType = 'Asset'
        this.contentFields.validations!.push({
            linkMimetypeGroup: ['image'],
        })
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: {
        file: {
            url: string
        }
    }`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: ContentfulAsset`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            file {
                url
            }
        }`
}
