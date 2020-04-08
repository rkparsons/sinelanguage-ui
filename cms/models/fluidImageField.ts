import Field from './field'
import FluidImageType from '../constants/fluidImageType'
import { SubFieldProps } from '../types/subFieldProps'

type FluidImageProps = SubFieldProps & {
    maxWidth: number
    quality: number
    fluidImageType: FluidImageType
}

export default class FluidImageField extends Field {
    maxWidth: number
    quality: number
    fluidImageType: FluidImageType

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
        maxWidth,
        quality,
        fluidImageType,
    }: FluidImageProps) {
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
        this.maxWidth = maxWidth
        this.quality = quality
        this.fluidImageType = fluidImageType
    }

    getTyping = () => `{
        fluid: FluidObject
    }`

    getNode = () => `${this.contentFields.id}: ContentfulAsset`

    getFragment = () =>
        `${this.contentFields.id} {
            fluid(maxWidth: ${this.maxWidth}, quality: ${this.quality}) {
                ...${this.fluidImageType}
            }
        }`
}
