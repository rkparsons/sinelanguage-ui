import { Control } from './control'
import Field from '../models/field'

export type ContentTypeModel = {
    name: string
    description: string
    displayField: string
    fields: Field[]
    id: string
    controls: Control[]
}
