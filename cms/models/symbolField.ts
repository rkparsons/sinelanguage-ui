import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class SymbolField extends Field {
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

    getTyping = () => `string`
}
