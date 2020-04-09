import { Field, RichTextField, TextField } from '../models'
import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentType } from '../models'
import os from 'os'

let file: WriteStream

export function generateNodes(filePath: string, contentTypeModels: ContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeLine(`export const typeDefs = \``)
    writeNodes(contentTypeModels)
    writeLine(`\``)
    console.log(`SUCCESS: nodes written to file ${filePath}`)
}

function clearFile(filePath: string) {
    writeFile(filePath, '', () => {})
}

function initFileWriter(filePath: string) {
    file = createWriteStream(filePath, {
        flags: 'a',
    })
}

function writeNodes(contentTypeModels: ContentType[]) {
    contentTypeModels.forEach((contentTypeModel, index) => {
        const schemaName = contentTypeModel.name.replace(/ /g, '')

        writeLinkedNodes(contentTypeModel, schemaName)
        writeSchemaNode(contentTypeModel, schemaName)

        if (index < contentTypeModels.length - 1) {
            writeLine()
        }
    })
}

function writeLinkedNodes(schema: ContentType, schemaName: string) {
    schema.fields
        .filter(field => field instanceof RichTextField || field instanceof TextField)
        .forEach(field => writeLinkedNode(field as RichTextField | TextField, schemaName))
}

function writeLinkedNode(field: RichTextField | TextField, schemaName: string) {
    writeLineIndented(1, field.getLinkedNode(schemaName))
    writeLine()
}

function writeSchemaNode(schema: ContentType, schemaName: string) {
    writeLineIndented(1, `type Contentful${schemaName} implements Node {`)
    schema.fields.forEach(field => writeField(schemaName, field))
    writeLineIndented(1, '}')
}

function writeField(schemaName: string, field: Field) {
    writeLineIndented(2, field.getNode(schemaName))
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}

function writeLineIndented(indents: number, line: string = '') {
    writeLine(`${'\t'.repeat(indents)}${line}`)
}
