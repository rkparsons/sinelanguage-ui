import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

export default class SymbolField extends ContentfulField {
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
            type: 'Symbol',
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

    getTypeDefinition = () => `${this.contentFields.id}: string`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: String`

    getFragmentDefinition = () => this.contentFields.id
}
