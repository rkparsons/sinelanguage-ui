import Field from './field'
import { FieldValidation } from '../types/fieldValidation'
import { SubFieldProps } from '../types/subFieldProps'

type ArrayProps = {
    itemType: string
    itemValidations?: FieldValidation[]
}

export default class SymbolArrayField extends Field {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        itemType,
        itemValidations,
        widgetId,
        helpText,
        format,
    }: SubFieldProps & ArrayProps) {
        super({
            id,
            name,
            type: 'Array',
            localized,
            required,
            validations,
            disabled,
            omitted,
            items: {
                type: itemType,
                validations: itemValidations,
            },
            widgetId,
            helpText,
            format,
        })
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: string[]`

    getNode = () => `${this.contentFields.id}: [String]`

    getFragment = () => this.contentFields.id
}
