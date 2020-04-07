import { FieldValidation } from './fieldValidation'
import { FieldItems } from './fieldItems'

export type FieldProps = {
    id: string
    name: string
    type: string
    required?: boolean
    localized?: boolean
    disabled?: boolean
    omitted?: boolean
    validations?: FieldValidation[]
    items?: FieldItems
}
