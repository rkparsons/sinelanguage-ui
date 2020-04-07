import Field from './field'
import { FieldProps } from '../types/fieldProps'
import { ImageFieldProps } from '../types/imageFieldProps'

export default class ImageField extends Field {
    linkType: string

    constructor({
        id,
        name,
        type,
        localized,
        required,
        validations,
        disabled,
        omitted,
        linkType,
    }: FieldProps & ImageFieldProps) {
        super({ id, name, type, localized, required, validations, disabled, omitted })
        this.linkType = linkType
        this.validations.push({
            linkMimetypeGroup: ['image'],
        })
    }
}
