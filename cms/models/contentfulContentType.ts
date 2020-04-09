import ContentType from './contentType'
import ContentfulField from './contentfulField'
import { Control } from '../types/control'
import os from 'os'

type ContentfulContentTypeProps = {
    name: string
    description: string
    displayField: string
    fields: ContentfulField[]
    id: string
}

export default class ContentfulContentType extends ContentType {
    name: string
    typeName: string
    nodeName: string
    description: string
    displayField: string
    fields: ContentfulField[]
    id: string
    controls: Control[]
    stringWriter: string = ``

    constructor({ name, description, displayField, fields, id }: ContentfulContentTypeProps) {
        super({ fields })
        this.name = name
        this.typeName = name.replace(/ /g, '')
        this.nodeName = `Contentful${this.typeName}`
        this.description = description
        this.displayField = displayField
        this.fields = fields
        this.id = id
        this.controls = fields
            .map(x => x.control)
            .filter(control => control !== undefined) as Control[]
    }

    getTypeDefinition() {
        this.stringWriter = ``
        this.writeLine(`export type ${this.typeName} = {`)
        this.writeLine(`__typename: string`, 1)
        this.fields.forEach(field => {
            this.writeLine(field.getTypeDefinition(), 1)
        })
        this.writeLine(`}`)

        return this.stringWriter
    }

    write(line: string, indents: number = 0) {
        this.stringWriter += `${'\t'.repeat(indents)}${line}`
    }

    writeLine(line: string, indents: number = 0) {
        this.write(line, indents)
        this.write(os.EOL)
    }
}
