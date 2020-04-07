import { FieldValidation } from './fieldValidation'

export type FieldItems = {
    type: string
    linkType?: string
    validations?: FieldValidation[]
}
