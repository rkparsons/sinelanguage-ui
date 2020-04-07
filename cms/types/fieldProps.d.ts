import { FieldValidation } from './fieldValidation'
import { FieldItems } from './fieldItems'
import { Control } from './control'

export type FieldProps = {
    id?: string
    name: string
    type: string
    required?: boolean
    localized?: boolean
    disabled?: boolean
    omitted?: boolean
    validations?: FieldValidation[]
    items?: FieldItems
    control?: Control
}
