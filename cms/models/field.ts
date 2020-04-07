import { FieldItems } from '../types/fieldItems'
import { FieldProps } from '../types/fieldProps'
import { FieldValidation } from '../types/fieldValidation'

export default class Field {
    id: string
    name: string
    type: string
    required?: boolean
    localized?: boolean
    disabled?: boolean
    omitted?: boolean
    validations: FieldValidation[]
    items?: FieldItems

    constructor({
        id,
        name,
        type,
        required = true,
        localized = false,
        disabled = false,
        omitted = false,
        validations = [],
        items,
    }: FieldProps) {
        this.id = id
        this.name = name
        this.type = type
        this.localized = localized
        this.required = required
        this.validations = validations
        this.disabled = disabled
        this.omitted = omitted
        this.items = items
    }
}
