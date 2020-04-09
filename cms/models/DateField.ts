import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class DateField extends Field {
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
            type: 'Date',
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

    getTypeDefinition = () => `${this.contentFields.id}: Date`

    getNode = () => `${this.contentFields.id}: Date @dateformat`

    getFragment = () => this.contentFields.id
}
