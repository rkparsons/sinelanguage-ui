import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class ImageField extends Field {
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
    }: SubFieldProps) {
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
        this.linkType = 'Asset'
        this.validations.push({
            linkMimetypeGroup: ['image'],
        })
    }

    getTyping = () => `{
        file: {
            url: string
        }
    }`

    getFragment = () =>
        `${this.id} {
            file {
                url
            }
        }`
}
