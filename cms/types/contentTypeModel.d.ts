import { EditorInterface } from './editorInterface'
import { FieldProps } from './fieldProps'

export type ContentTypeModel = EditorInterface & {
    name: string
    description: string
    displayField: string
    fields: FieldProps[]
    id: string
}
