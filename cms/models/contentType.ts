import { Control } from '../types/control'
import Field from './field'

type ContentTypeProps = {
    name: string
    description: string
    displayField: string
    fields: Field[]
    id: string
}

export default class ContentType {
    name: string
    nodeName: string
    description: string
    displayField: string
    fields: Field[]
    id: string
    controls: Control[]

    constructor({ name, description, displayField, fields, id }: ContentTypeProps) {
        this.name = name
        this.nodeName = `Contentful${name.replace(/ /g, '')}`
        this.description = description
        this.displayField = displayField
        this.fields = fields
        this.id = id
        this.controls = fields
            .map(x => x.control)
            .filter(control => control !== undefined) as Control[]
    }
}
