import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

type LinkFieldProps = SubFieldProps & {
    linkId: string
}

export default class LinkField extends ContentfulField {
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
        linkId,
    }: LinkFieldProps) {
        super({
            id,
            name,
            type: 'Link',
            localized,
            required,
            validations,
            disabled,
            omitted,
            widgetId,
            helpText,
            format,
        })
        this.contentFields.linkType = 'Entry'
        this.contentFields.validations!.push({
            linkContentType: [linkId],
        })
    }

    getTypeDefinitionImports = () => []
    // todo: link field should have ref to linked schema
    getTypeDefinition = () => `${this.contentFields.id}: ${this.contentFields.name}`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: Contentful${this.contentFields.name}`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            ...${this.contentFields.id}Fragment
        }`
}
