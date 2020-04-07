import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class DateField extends Field {
    constructor({ id, name, localized, required, validations, disabled, omitted }: SubFieldProps) {
        super({ id, name, type: 'Date', localized, required, validations, disabled, omitted })
    }
}
