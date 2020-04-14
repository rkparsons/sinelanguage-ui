import ContentfulContentType from './contentfulContentType'
import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types'

type LinkArrayFieldProps = SubFieldProps & {
    link: ContentfulContentType
}

export default class LinkArrayField extends ContentfulField {
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
    }: LinkArrayFieldProps) {
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
                type: 'Link',
                validations: [
                    {
                        linkContentType: [link.name],
                    },
                ],
                linkType: 'Entry',
            },
            widgetId,
            helpText,
            format,
        })
        this.link = link
    }

    getTypeDefinitionImports = () => []

    getTypeDefinition = () => `${this.contentFields.id}: ${this.link.name}[]`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: [Contentful${this.link.name}]`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            ...${this.link.id}Fragment
        }`
}
