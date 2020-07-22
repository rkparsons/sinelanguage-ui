import { ContentFields } from 'contentful-management/dist/typings/entities/content-type-fields'
import { Control } from '../types/control'
import Field from './field'
import { FieldProps } from '../types/fieldProps'

export default abstract class ContentfulField extends Field {
    nodeName: string
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
        widgetNamespace = 'builtin',
        widgetId,
        helpText,
        format,
    }: FieldProps) {
        super()
        this.contentFields = {
            id: id || name.replace(/ /g, '').replace(/^\w/, (c) => c.toLowerCase()),
            name,
            type,
            localized,
            required,
            validations,
            disabled,
            omitted,
            items,
        }
        this.nodeName = this.contentFields.id.replace(/^\w/, (c) => c.toUpperCase())

        if (widgetId) {
            this.control = {
                fieldId: this.contentFields.id,
                widgetNamespace,
                widgetId,
                settings: {
                    helpText,
                    format,
                },
            }
        }
    }

    abstract getTypeDefinitionImports(): string[]

    abstract getTypeDefinition(): string

    abstract getLinkedNodeDefinition(schemaName: string): string | undefined

    abstract getNodeDefinition(schemaName: string): string

    abstract getFragmentDefinition(): string
}
