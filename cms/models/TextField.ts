import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

export default class TextField extends ContentfulField {
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
            type: 'Text',
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

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: {
        ${this.contentFields.id}: string
    }`

    getLinkedNodeDefinition = (schemaName: string) =>
        `type contentful${schemaName}${this.nameNoSpace}TextNode implements Node {
        ${this.contentFields.id}: String
    }`

    getNodeDefinition = (schemaName: string) =>
        `${this.contentFields.id}: contentful${schemaName}${this.nameNoSpace}TextNode`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            ${this.contentFields.id}
        }`
}
