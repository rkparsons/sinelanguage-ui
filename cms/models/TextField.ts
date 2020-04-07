import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class TextField extends Field {
    constructor({ id, name, localized, required, validations, disabled, omitted }: SubFieldProps) {
        super({ id, name, type: 'Text', localized, required, validations, disabled, omitted })
    }
}
