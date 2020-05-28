import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

export default class TrackListField extends ContentfulField {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        widgetId,
        helpText,
        format,
    }: SubFieldProps) {
        super({
            id,
            name,
            type: 'Object',
            localized,
            required,
            validations,
            disabled,
            omitted,
            widgetId,
            helpText,
            format,
        })
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: {
        artist: string
        title: string
    }[]`

    getLinkedNodeDefinition = (
        schemaName: string
    ) => `type contentful${schemaName}${this.nodeName}JsonNode implements Node {            
        artist: String
        title: String
    }`

    getNodeDefinition = (schemaName: string) =>
        `${this.contentFields.id}: [contentful${schemaName}${this.nodeName}JsonNode]`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            artist
            title
        }`
}
