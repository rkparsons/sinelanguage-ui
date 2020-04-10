import { FluidImageType, Import } from '../constants'

import ContentfulField from './contentfulField'
import { SubFieldProps } from '../types'

type FluidImageProps = SubFieldProps & {
    maxWidth: number
    quality: number
    fluidImageType: FluidImageType
}

export default class FluidImageField extends ContentfulField {
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

    getTypeDefinitionImports = () => [Import.FLUID_OBJECT]

    getTypeDefinition = () => `${this.contentFields.id}: {
        fluid: FluidObject
    }`

    getLinkedNodeDefinition = () => undefined

    getNodeDefinition = () => `${this.contentFields.id}: ContentfulAsset`

    getFragmentDefinition = () =>
        `${this.contentFields.id} {
            fluid(maxWidth: ${this.maxWidth}, quality: ${this.quality}) {
                ...${this.fluidImageType}
            }
        }`
}
