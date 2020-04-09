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
    fragmentName: string
    description: string
    displayField: string
    fields: ContentfulField[]
    id: string
    controls: Control[]
    stringWriter: string = ``

    constructor({ id, name, description, displayField, fields }: ContentfulContentTypeProps) {
        super({ fields })
        this.id = id
        this.name = name
        this.typeName = name.replace(/ /g, '')
        this.nodeName = `Contentful${this.typeName}`
        this.fragmentName = `${this.id}Fragment`
        this.description = description
        this.displayField = displayField
        this.fields = fields
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

    getFragmentDefinition() {
        this.stringWriter = ``
        this.writeLine(`export const ${this.fragmentName} = graphql\``)
        this.writeLine(`fragment ${this.fragmentName} on ${this.nodeName} {`, 1)
        this.fields.forEach(field => {
            this.writeLine(field.getFragmentDefinition(), 2)
        })
        this.writeLine(`}`, 1)
        this.writeLine(`\``)

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
