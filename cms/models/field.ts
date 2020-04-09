import { ContentFields } from 'contentful-management/typings/contentFields'
import { Control } from '../types/control'
import { FieldProps } from '../types/fieldProps'

export default abstract class Field {
    contentFields: ContentFields
    // todo: replace with contentful control type
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
        this.contentFields = {
            id: id || name.replace(/ /g, '').replace(/^\w/, c => c.toLowerCase()),
            name,
            type,
            localized,
            required,
            validations,
            disabled,
            omitted,
            items,
        }

        if (widgetId) {
            this.control = {
                fieldId: this.contentFields.id,
                widgetNamespace: 'builtin',
                widgetId,
                settings: {
                    helpText,
                    format,
                },
            }
        }
    }

    getNameNoSpace = () => this.contentFields.name.replace(/ /g, '')

    abstract getTypeDefinitionImports(): string[]

    abstract getTypeDefinition(): string

    abstract getNode(schemaName: string): string

    abstract getFragment(): string
}
