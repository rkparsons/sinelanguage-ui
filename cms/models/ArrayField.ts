import Field from './field'
import { FieldValidation } from '../types/fieldValidation'
import { SubFieldProps } from '../types/subFieldProps'

type ArrayProps = {
    itemType: string
    itemValidations?: FieldValidation[]
}

export default class ArrayField extends Field {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        itemType,
        itemValidations,
    }: SubFieldProps & ArrayProps) {
        const items = {
            type: itemType,
            validations: itemValidations,
        }
        super({
            id,
            name,
            type: 'Array',
            localized,
            required,
            validations,
            disabled,
            omitted,
            items,
        })
    }
}
