import { Validation } from 'contentful-management/typings/ContentFields'

export type FieldValidation = Validation & {
    message?: string
}
