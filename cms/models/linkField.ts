import ContentfulContentType from './contentfulContentType'
import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types/subFieldProps'

type LinkFieldProps = SubFieldProps & {
    link: ContentfulContentType
}

export default class LinkField extends ContentfulField {
    link: ContentfulContentType

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
        link,
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
            linkContentType: [link.id],
        })
        this.link = link
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: ${this.link.name}`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: Contentful${this.link.name}`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            ...${this.link.id}Fragment
        }`
}
