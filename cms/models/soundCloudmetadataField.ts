import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

// todo: make this more generic
export default class SoundCloudMetadataField extends ContentfulField {
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
            widgetNamespace: 'app',
            widgetId,
            helpText,
            format,
        })
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: {
        title: string        
        streamUrl: string
        duration: number
        samples: number[]
    }`

    getLinkedNodeDefinition = (
        schemaName: string
    ) => `type contentful${schemaName}${this.nodeName}JsonNode implements Node {
        title: String
        streamUrl: String
        duration: Int
        samples: [Float]
    }`

    getNodeDefinition = (schemaName: string) =>
        `${this.contentFields.id}: contentful${schemaName}${this.nodeName}JsonNode`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            title
            streamUrl
            duration
            samples
        }`
}
