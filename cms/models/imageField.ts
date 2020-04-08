import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class ImageField extends Field {
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
        this.contentFields.linkType = 'Asset'
        this.contentFields.validations!.push({
            linkMimetypeGroup: ['image'],
        })
    }

    getTyping = () => `{
        file: {
            url: string
        }
    }`

    getNode = () => `${this.contentFields.id}: ContentfulAsset`

    getFragment = () =>
        `${this.contentFields.id} {
            file {
                url
            }
        }`
}
