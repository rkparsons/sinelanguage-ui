import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

export default class DecimalField extends ContentfulField {
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
            type: 'Number',
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

    getTypeDefinition = () => `${this.contentFields.id}: number`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: Float`

    getFragmentDefinition = () => this.contentFields.id
}
