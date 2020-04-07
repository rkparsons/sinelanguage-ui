import { Control } from '../types/control'
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
    control?: Control

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
        widgetId,
        helpText,
        format,
    }: FieldProps) {
        this.id = id || name.replace(/ /g, '').replace(/^\w/, c => c.toLowerCase())
        this.name = name
        this.type = type
        this.localized = localized
        this.required = required
        this.validations = validations
        this.disabled = disabled
        this.omitted = omitted
        this.items = items

        if (widgetId) {
            this.control = {
                fieldId: this.id,
                widgetNamespace: 'builtin',
                widgetId,
                settings: {
                    helpText,
                    format,
                },
            }
        }
    }
}
