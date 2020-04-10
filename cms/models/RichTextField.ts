import ContentfulField from './contentfulField'
import { Import } from '../constants'
import { SubFieldProps } from '../types/subFieldProps'

export default class RichTextField extends ContentfulField {
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
            type: 'RichText',
            localized,
            required,
            validations,
            disabled,
            omitted,
            widgetId,
            helpText,
            format,
        })
    }

    getTypeDefinitionImports = () => [Import.DOCUMENT]

    getTypeDefinition = () => `${this.contentFields.id}: {
        json: Document
    }`

    getLinkedNodeDefinition = (
        schemaName: string
    ) => `type contentful${schemaName}${this.nameNoSpace}RichTextNode implements Node {
        nodeType: String
        json: JSON
    }`

    getNodeDefinition = (schemaName: string) =>
        `${this.contentFields.id}: contentful${schemaName}${this.nameNoSpace}RichTextNode`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            json
        }`
}
