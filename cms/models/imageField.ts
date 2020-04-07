import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class ImageField extends Field {
    linkType: string

    constructor({ id, name, localized, required, validations, disabled, omitted }: SubFieldProps) {
        super({ id, name, type: 'Link', localized, required, validations, disabled, omitted })
        this.linkType = 'Asset'
        this.validations.push({
            linkMimetypeGroup: ['image'],
        })
    }
}
