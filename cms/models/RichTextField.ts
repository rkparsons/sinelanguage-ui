import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class RichTextField extends Field {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        control,
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
            control,
        })
    }
}
