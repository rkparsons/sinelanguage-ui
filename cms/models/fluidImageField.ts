import Field from './field'
import FluidImageType from '../constants/fluidImageType'
import { SubFieldProps } from '../types/subFieldProps'

type FluidImageProps = SubFieldProps & {
    maxWidth: number
    quality: number
    fluidImageType: FluidImageType
}

export default class FluidImageField extends Field {
    linkType: string
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
        this.linkType = 'Asset'
        this.validations.push({
            linkMimetypeGroup: ['image'],
        })
        this.maxWidth = maxWidth
        this.quality = quality
        this.fluidImageType = fluidImageType
    }

    getTyping = () => `{
        fluid: FluidObject
    }`

    getFragment = () =>
        `${this.id} {
            fluid(maxWidth: ${this.maxWidth}, quality: ${this.quality}) {
                ...${this.fluidImageType}
            }
        }`
}
