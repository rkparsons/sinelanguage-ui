import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentTypeModel } from '../types/contentTypeModel'
import Field from '../models/field'
import os from 'os'

let file: WriteStream

export function generateNodes(filePath: string, contentTypeModels: ContentTypeModel[]) {
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

function writeNodes(contentTypeModels: ContentTypeModel[]) {
    contentTypeModels.forEach((contentTypeModel, index) => {
        writeNode(contentTypeModel)

        if (index < contentTypeModels.length - 1) {
            writeLine()
        }
    })
}

function writeNode(schema: ContentTypeModel) {
    const schemaName = schema.name.replace(/ /g, '')
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
