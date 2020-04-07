import { FieldProps } from './fieldProps'
import { Control } from './control'

export type ContentTypeModel = {
    name: string
    description: string
    displayField: string
    fields: FieldProps[]
    id: string
    controls: Control[]
}
