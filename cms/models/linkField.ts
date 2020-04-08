import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

type LinkFieldProps = SubFieldProps & {
    linkId: string
}

export default class LinkField extends Field {
    linkType: string

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
        this.linkType = 'Entry'
        this.validations.push({
            linkContentType: [linkId],
        })
    }

    // todo: link field should have ref to linked schema
    getTyping = () => this.name
}
