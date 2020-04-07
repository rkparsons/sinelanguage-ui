import { FieldValidation } from './fieldValidation'
import { FieldItems } from './fieldItems'

export type SubFieldProps = {
    id?: string
    name: string
    required?: boolean
    localized?: boolean
    disabled?: boolean
    omitted?: boolean
    validations?: FieldValidation[]
    items?: FieldItems
    widgetId?: string
    helpText?: string
    format?: string
}
